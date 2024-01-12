import mutate from "../interfaces/mutate.js";
import { ressource } from "../interfaces/ressource.js";
import { onlinePlayers, strategyInfos } from "../scripts/globalData.js";
import { pb, collections } from "../scripts/pb.js";
import { scoreCalcFunc } from "../scripts/utils/f.js";
import objectKeys from "../scripts/utils/objectKeys.js";

const calcRessources = async (userID: string) => {
    if (!onlinePlayers[userID].userData) return;
    let inactiveBats = [];

    Object.keys(onlinePlayers[userID].userData.mutate).forEach((batKey) => {
        let hasRessources = true;

        const { inputs, outputs } =
            onlinePlayers[userID].userData.mutate[batKey];
        inputs &&
            Object.keys(inputs).forEach((ressource) => {
                let value = inputs[ressource];

                if (
                    onlinePlayers[userID].userData.ressources?.[ressource] >=
                    value
                )
                    return;
                hasRessources = false;
            });

        if (!hasRessources) {
            inactiveBats.push(batKey);
            return;
        }

        inputs &&
            Object.keys(inputs).forEach((ressource) => {
                let value = inputs[ressource];
                onlinePlayers[userID].userData.ressources[ressource] -= value;
            });
        outputs &&
            Object.keys(outputs).forEach((ressource) => {
                let value = outputs[ressource];

                onlinePlayers[userID].userData.ressources[ressource] ??= 0;
                onlinePlayers[userID].userData.ressources[ressource] += value;
            });
    });

    // Calcul le score des ressources
    let globalScore = 0;

    objectKeys(onlinePlayers[userID].userData.ressources).forEach((key) => {
        let ressource = onlinePlayers[userID].userData.ressources[key];
        const info = strategyInfos.get(key);
        if (!info) return;
        const { score, multiplier } = info;
        if (score === 0) return;
        globalScore += scoreCalcFunc(ressource, score, multiplier);
    });

    try {
        await pb.collection(collections.users).update(userID, {
            ressources: onlinePlayers[userID].userData.ressources,
            ressourcesScore: globalScore,
        });
    } catch (err) {
        console.log(err);
        console.log(
            "Unable to update the ressourcesScore, ressources back to the db "
        );
    }
};

export default calcRessources;
