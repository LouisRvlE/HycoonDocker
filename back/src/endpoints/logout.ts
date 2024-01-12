import { endPointfunction } from "../interfaces/endPointfunction.js";
import { onlinePlayers } from "../scripts/globalData.js";

export const logout: endPointfunction<{}> = async (params, context) => {
    if (context.userID) {
        onlinePlayers[context.userID].userList = onlinePlayers[
            context.userID
        ].userList.filter((el) => el === context.socketID);
        if (onlinePlayers[context.userID].userList.length === 0) {
            delete onlinePlayers[context.userID];
        }
    }
};