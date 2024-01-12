import { endPointfunction } from "../interfaces/endPointfunction.js";
import { onlinePlayers, strategyInfos } from "../scripts/globalData.js";
import { collections, pb } from "../scripts/pb.js";
import { build, building } from "../interfaces/building.js";
import objectKeys from "../scripts/utils/objectKeys.js";
import calcMutate from "../calculs/calcMutate.js";
import { ressourceItem } from "../interfaces/ressourceItem.js";
import f from "../scripts/utils/f.js";
import { parseName } from "../scripts/utils/parseName.js";

// *                                                    * //
/* */ let upgradeRatio = { input: 1.1999, output: 1.2 }; /* */
// *                                                    * //

export const upgradeBuilding: endPointfunction<{
    buildingID: string;
    upgradeType: "efficiency" | "ecology";
    notifyId: string;
}> = async ({ buildingID, upgradeType, notifyId }, context, callback) => {
    if (!context.userID) {
        context.notify({
            message: `You were not logged-in, try again !`,
            id: notifyId,
            color: "red",
        });
        console.log("you where not connected");
        callback(false);
        return;
    }
    let targetBuilding: building;
    try {
        targetBuilding = await pb
            .collection(collections.buildings)
            .getOne(buildingID, { expand: "" });
    } catch (e) {
        context.notify({ id: notifyId, message: "Building not found" });
        callback(false);
        return;
    }

    let hasRessources = true;
    let dontHaveList = [];
    let upgradeCost = {
        [upgradeType === "ecology" ? "biopoly" : "petrol"]: f(
            targetBuilding.upgrades[upgradeType]
        ),
        electronic: f(targetBuilding.upgrades[upgradeType]) + 200,
    };

    objectKeys(upgradeCost).forEach((el, _id) => {
        if (
            upgradeCost[el] >
            onlinePlayers[context.userID].userData.ressources[el]
        ) {
            hasRessources = false;
            dontHaveList.push(el);
        }
    });

    if (!hasRessources) {
        callback(false);
        context.notify({
            message: `You dont have enough of ${dontHaveList
                .map((el) => parseName(el))
                .join(", ")}`,
            color: "red",
            id: notifyId,
        });
        return;
    }

    objectKeys(upgradeCost).forEach((el, _id) => {
        onlinePlayers[context.userID].userData.ressources[el] -=
            upgradeCost[el];
    });

    let newInput: ressourceItem[];
    let newOutput: ressourceItem[];

    if (upgradeType === "efficiency") {
        let hasPollution = false;
        newInput = targetBuilding.inputs.map((el, _id) => {
            // if (el.ressource === "pollution") return
            return { ...el, value: Math.ceil(el.value * upgradeRatio.input) };
        });

        newOutput = targetBuilding.outputs.map((el, _id) => {
            if (el.ressource !== "pollution")
                return {
                    ...el,
                    value: Math.ceil(el.value * upgradeRatio.output),
                };
            hasPollution = true;
            return { ...el, value: el.value + 2 };
        });
        if (!hasPollution) newOutput.push({ ressource: "pollution", value: 2 });
        // newOutput.find((el)=>el.ressource[pollution])
    }

    if (upgradeType === "ecology") {
        newOutput = targetBuilding.outputs.map((el, _id) => {
            if (!(el.ressource === "pollution"))
                return {
                    ...el,
                    value: Math.floor(el.value * 0.95),
                };
            if (el.ressource === "pollution") {
                let newValue = el.value - 2;
                if (newValue < 1) newValue = 1;
                return { ...el, value: newValue };
            }
        });
    }

    const dataFactory: build = {
        ...targetBuilding,

        inputs: newInput,
        outputs: newOutput,

        upgrades: {
            efficiency:
                upgradeType === "efficiency"
                    ? targetBuilding.upgrades.efficiency + 1
                    : targetBuilding.upgrades.efficiency,
            ecology:
                upgradeType === "ecology"
                    ? targetBuilding.upgrades.ecology + 1
                    : targetBuilding.upgrades.ecology,
        },
    };

    try {
        await Promise.all([
            pb
                .collection(collections.buildings)
                .update(buildingID, dataFactory),
            pb.collection(collections.users).update(context.userID, {
                ressources: onlinePlayers[context.userID].userData.ressources,
            }),
        ]);
        calcMutate(context.userID);
        callback(true);
        context.notify({
            message: `Succes !`,
            id: notifyId,
        });
    } catch (error: any) {
        console.log(error);
    }
};
