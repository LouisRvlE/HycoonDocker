import eventsource from "eventsource";
import { endPointfunction } from "../interfaces/endPointfunction.js";
import { onlinePlayers } from "../scripts/globalData.js";
global.EventSource = eventsource;

export const log: endPointfunction<{}> = async (params, context) => {
    if (!context.userID) {
        return;
    }
    console.log(onlinePlayers);
};
