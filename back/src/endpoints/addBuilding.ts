import { endPointfunction } from "../interfaces/endPointfunction.js";
import objectKeys from "../scripts/utils/objectKeys.js";
import { ressource } from "../interfaces/ressource.js";
import mutate from "../interfaces/mutate.js";
import { pb, collections } from "../scripts/pb.js";
import { onlinePlayers, strategyInfos } from "../scripts/globalData.js";
import calcMutate from "../calculs/calcMutate.js";
import { build } from "../interfaces/building.js";
import f from "../scripts/utils/f.js";
import { ListResult, Record } from "pocketbase";
import { parseName } from "../scripts/utils/parseName.js";

type buildingAmountType = Record & { ligne_count: number };

export const addBuilding: endPointfunction<{
    buildingKey: string;
    notifyId: string;
}> = async (params, context, callback) => {
    if (!context.userID) {
        context.notify({
            message: `You were not logged-in, try again !`,
            id: params.notifyId,
            color: "red",
        });
        callback(false);
        return;
    }
    let targetBuilding = strategyInfos.get(params.buildingKey);
    let hasRessources = true;
    let dontHaveList = [];
    let unlockedBuildings: any;

    let targetInfo = targetBuilding.info;

    let buildingAmount: number;
    try {
        let resBA: buildingAmountType = await pb
            .collection("strategyBuildingsCount")
            .getFirstListItem(
                `type="${targetBuilding.name}" && uID="${context.userID}"`
            );
        buildingAmount = resBA.ligne_count;
    } catch (err) {
        buildingAmount = 0;
    }

    try {
        let resUB = await pb.collection(collections.users).getOne(context.userID)
        unlockedBuildings = resUB.unlockedBuildings
        console.log("liezuhfl", context.userID)
    } catch (err) {
        console.log(err)
    }

    objectKeys(targetInfo.cost).forEach((el, _id) => {
        console.log(
            f(buildingAmount) + targetInfo.cost[el],
            onlinePlayers[context.userID].userData.ressources[el] || 0
        );
        if (
            f(buildingAmount) + targetInfo.cost[el] <=
            (onlinePlayers[context.userID].userData.ressources[el] || 0)
        )
            return;
        hasRessources = false;
        dontHaveList.push(el);
    });

    if (!hasRessources) {
        callback(hasRessources, "Vous n'avez pas assez de ressources ");
        context.notify({
            message: `You dont have enough of ${dontHaveList
                .map((el) => parseName(el))
                .join(", ")}`,
            color: "red",
            id: params.notifyId,
        });
        return;
    }

    objectKeys(targetInfo.cost).forEach((el, _id) => {
        onlinePlayers[context.userID].userData.ressources[el] -=
            f(buildingAmount) + targetInfo.cost[el];
    });

    if ( targetBuilding.type === "standalone") { unlockedBuildings = unlockedBuildings.filter((el, _id)=> el !== targetBuilding.name ) }
    console.log(unlockedBuildings);

    const dataFactory: build = {
        uID: context.userID,
        type: params.buildingKey,
        inputs: targetInfo.inputs,
        outputs: targetInfo.outputs,
        cost: {
            ...targetInfo.cost,
        },
        upgrades: {
            efficiency: 0,
            ecology: 0,
        },
        category: targetBuilding.category,
        clock: 100,
        position : targetBuilding.defaultPosition,
        navlink : targetBuilding.navlink,
    };
    try {
        await Promise.all([
            pb.collection(collections.buildings).create(dataFactory),
            pb.collection(collections.users).update(context.userID, {
                ressources: onlinePlayers[context.userID].userData.ressources,
                unlockedBuildings,
            }),
        ]);
        callback(true);
        context.notify({
            message: `${parseName(params.buildingKey)} has been builded !`,
            id: params.notifyId,
            color: "teal",
        });
    } catch (error: any) {
        callback(false, error);
        console.log(error);
    }
    calcMutate(context.userID);
};

export default addBuilding;
