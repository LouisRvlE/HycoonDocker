import { endPointfunction } from "../interfaces/endPointfunction.js";
import { ressourceType } from "../interfaces/ressourceType.js";
import { onlinePlayers } from "../scripts/globalData.js";

export const clearRessources: endPointfunction<{}> = async (_, context) => {
    if (!context.userID) {
        context.notify({ message: "retry" });
        return;
    }

    try {
        onlinePlayers[context.userID].userData.ressources = {};
        onlinePlayers[context.userID].userData.mutate = {};
        onlinePlayers[context.userID].userData.incomes = {};
        context.notify({ message: "cleared" });
    } catch (err) {
        context.notify({ message: "retry" });
        console.log(err);
    }
};
