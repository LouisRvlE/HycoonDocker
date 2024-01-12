import { endPointfunction } from "../interfaces/endPointfunction.js";
import { ressourceType } from "../interfaces/ressourceType.js";
import { onlinePlayers } from "../scripts/globalData.js";
import { parseName } from "../scripts/utils/parseName.js";

export const setRessources: endPointfunction<{
    ressource: ressourceType;
    amount: number;
}> = async ({ ressource, amount }, context) => {
    if (!context.userID) {
        context.notify({ message: "retry" });
        return;
    }
    try {
        onlinePlayers[context.userID].userData.ressources[ressource] ??= 0;
        onlinePlayers[context.userID].userData.ressources[ressource] = amount;
        context.notify({
            message: `Set ${amount} to ${parseName(ressource)}`,
        });
    } catch (err) {
        context.notify({ message: "retry" });
        console.log(err);
    }
};
