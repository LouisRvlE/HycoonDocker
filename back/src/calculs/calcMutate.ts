import { sumItem } from "../interfaces/mutate.js";
import { building, buildingType } from "../interfaces/building.js";
import { ressourceType } from "../interfaces/ressourceType.js";
import { collections, pb } from "../scripts/pb.js";
import {
    multipliers,
    onlinePlayers,
    strategyInfos,
} from "../scripts/globalData.js";
import { ressource } from "../interfaces/ressource.js";

const calcMutate = async (userID: string) => {
    // const { id }: { id: string } = await pb
    //     .collection(collections.users)
    //     .getOne(userID);

    let [buildings, homes] = (await Promise.all([
        pb
            .collection(collections.buildings)
            .getFullList({ filter: `uID="${userID}" && type!~"home"` }),
        pb
            .collection(collections.buildings)
            .getFullList({ filter: `uID="${userID}" && type~"home"` }),
    ])) as [building[], building[]];

    let sumMutate: Partial<ressource> = {};
    let sumIncome: Partial<ressource> = {};
    let globalScore = 0;

    const calc = ({ type, inputs, outputs, upgrades, clock }: building) => {

        let inputClocked: number = clock > 1 ? (clock + 0.4)/ 100 : clock / 100;
        let outputClocked: number = clock / 100;

        // console.log("éhoé", inputClocked, outputClocked)
        // console.log(Date.now())

        inputs.forEach((el) => {
            sumMutate[type] ??= {};
            sumMutate[type].inputs ??= {};
            sumMutate[type].inputs[el.ressource] ??= 0;
            sumMutate[type].inputs[el.ressource] += Math.round(
                el.value * inputClocked
            );

            sumIncome[el.ressource] ??= 0;
            sumIncome[el.ressource] -= Math.round(
                el.value * inputClocked
            );
        });
        outputs.forEach((el) => {
            sumMutate[type] ??= {};
            sumMutate[type].outputs ??= {};
            sumMutate[type].outputs[el.ressource] ??= 0;
            sumMutate[type].outputs[el.ressource] += Math.round(
                el.value * outputClocked
            );

            sumIncome[el.ressource] ??= 0;
            sumIncome[el.ressource] += Math.round(
                el.value * outputClocked
            );
        });
        const { score, multiplier } = strategyInfos.get(type);
        globalScore +=
            score +
            (upgrades.ecology * multipliers.ecology * multiplier +
                upgrades.efficiency * multipliers.efficiency * multiplier);
        // globalScore += scoreCalcFunc(score, multiplier, 1 )
    };

    buildings.forEach(calc);

    onlinePlayers[userID].userData.mutate = sumMutate;
    onlinePlayers[userID].userData.incomes = sumIncome;

    try {
        await pb.collection(collections.users).update(userID, {
            mutate: sumMutate,
            incomes: sumIncome,
            buildingScore: globalScore,
        });
    } catch (err) {
        console.log(err);
        console.log(
            "Unable to update the mutate, incomes and buildingScore back to the db"
        );
    }
};

export default calcMutate;
