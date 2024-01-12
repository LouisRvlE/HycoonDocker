import { endPointfunction } from "../interfaces/endPointfunction.js";
import { quest } from "../interfaces/quest.js";
import { userData } from "../interfaces/userData.js";
import { onlinePlayers } from "../scripts/globalData.js";
import { collections, pb } from "../scripts/pb.js";
import objectKeys from "../scripts/utils/objectKeys.js";

export const finishQuest: endPointfunction<{
    questId: string;
    notifyId: string;
}> = async ({ notifyId, questId }, context, callback) => {
    if (!context.userID) {
        context.notify({
            message: `You were not logged-in, try again !`,
            id: notifyId,
            color: "red",
        });
        callback(false);
        return;
    }
    let targetQuest: quest;
    try {
        // get corresponding quest
        targetQuest = await pb.collection(collections.quests).getOne(questId);

        // get needed :
        // neededRessources -> targetQuest.neededRessources
        // buildingOnSuccess -> targetQuest.buildingOnSuccess
        // questsOnSuccess -> targetQuest.questsOnSuccess
    } catch (err) {
        console.log(err);
        console.log("Couldn't collect quest data ", questId);
    }
    let hasRessources: boolean = true;
    console.log(targetQuest);
    objectKeys(targetQuest.ressourcesNeeded).forEach((el, _id) => {
        if (
            targetQuest.ressourcesNeeded[el] >
            onlinePlayers[context.userID].userData.ressources[el]
        )
            hasRessources = false;
        // has ressources with
        // onlinePlayers[context.userID].userData.ressources
        // and neededRessources
    });

    // if has :
    if (hasRessources) {
        targetQuest.buildingOnSuccess.forEach((el, _id) => {
            if (
                onlinePlayers[
                    context.userID
                ].userData.unlockedBuildings.includes(el)
            ) {
                context.notify({
                    id: notifyId,
                    message: `Building ${el} has already been unlocked`,
                });
                return;
            }
            return onlinePlayers[
                context.userID
            ].userData.unlockedBuildings.push(el);
        });

        if (
            !onlinePlayers[context.userID].userData.unlockedQuests.includes(
                questId
            )
        ) {
            onlinePlayers[context.userID].userData.unlockedQuests.push(questId);
        }

        pb.collection(collections.users).update(context.userID, {
            unlockedQuests:
                onlinePlayers[context.userID].userData.unlockedQuests,
            unlockedBuildings:
                onlinePlayers[context.userID].userData.unlockedBuildings,
        });
        // push buildingOnSuccess to userData (back and pb)
        // push questsOnSuccess to userData (back and pb)
        callback(true);
        context.notify({
            id: notifyId,
            message: "Quest has been fullfilled !",
        });
    } else {
        context.notify({ id: notifyId, message: "Unable to fullfill quest" });
        callback(false);
    }
};
