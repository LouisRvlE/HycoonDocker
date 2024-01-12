import { building } from "../interfaces/building.js";
import { endPointfunction } from "../interfaces/endPointfunction.js";
import { collections, pb } from "../scripts/pb.js";
import objectKeys from "../scripts/utils/objectKeys.js";
import { onlinePlayers, strategyInfos } from "../scripts/globalData.js";
import calcMutate from "../calculs/calcMutate.js";

export const deleteBuilding: endPointfunction<{
    buildingID: string;
}> = async (params, context, callback) => {
    if (!context.userID) {
        callback(false);
        return;
    }
    // Récupère le batiment cible dans la base de donnée
    let targetBuilding: building;
    try {
        targetBuilding = await pb
        .collection(collections.buildings)
        .getOne(params.buildingID);
    } catch (err) {
        console.log(err);
        callback(false);
        return;
    }
    let unlockedBuildings: string[];
    try {
        let resUB = await pb.collection(collections.users).getOne(context.userID)
        unlockedBuildings = resUB.unlockedBuildings
        console.log("liezuhfl", context.userID)
    } catch (err) {
        console.log(err)
        callback(false);
return; 
    }

    // On récupère le coût de construction du batiment qu'on souhaite détruire
    let targetCost = strategyInfos.get(targetBuilding.type).info.cost;

    // Calcul le remboursement et l'attribue au joueur en fonction du coût du batiment (70%)
    objectKeys(targetCost).forEach((el, _id) => {
        onlinePlayers[context.userID].userData.ressources[el] += Math.floor(
            targetCost[el] * 0.7
        );
    });

    if (targetBuilding.type === "standalone") { unlockedBuildings.push(targetBuilding.name) }

    // Mets à jour la base de donnée avec les nouvelles valeures
    try {
        await Promise.all([
            pb.collection(collections.buildings).delete(params.buildingID),
            pb.collection(collections.users).update(context.userID, {
                ressources: onlinePlayers[context.userID].userData.ressources,
                unlockedBuildings,
            }),
        ]);
        callback(true);
    } catch (error) {
        console.log(error);
        callback(false);
    }
    calcMutate(context.userID);
};
