import { endPointfunction } from "../interfaces/endPointfunction.js";
import { onlinePlayers } from "../scripts/globalData.js";
import { collections, pb } from "../scripts/pb.js";
import eventsource from "eventsource";
global.EventSource = eventsource;

export const disconnect: endPointfunction<{}> = async (params, context) => {
    if (context.userID && onlinePlayers[context.userID]) {
        onlinePlayers[context.userID].userList = onlinePlayers[
            context.userID
        ].userList.filter((el) => el === context.socketID);
        if (onlinePlayers[context.userID].userList.length === 0) {
            delete onlinePlayers[context.userID];
        }
    }
};
