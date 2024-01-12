import { endPointfunction } from "../interfaces/endPointfunction.js";
import { userData } from "../interfaces/userData.js";
import { onlinePlayers } from "../scripts/globalData.js";
import { collections, pb } from "../scripts/pb.js";
import eventsource from "eventsource";
import calcMutate from "../calculs/calcMutate.js";
global.EventSource = eventsource;

export const updateID: endPointfunction<{ id: string }> = async (
    params,
    context
) => {
    const { id } = params;
    context.userID = id;

    // onlinePlayers.add(id);
    context.unsubList.forEach(async (el) => {
        (await el)();
    });

    const userData: userData = await pb
        .collection(collections.users)
        .getOne(id);

    if (onlinePlayers[id]) {
        onlinePlayers[id].userData = userData;
        onlinePlayers[id].userList.push(context.socketID);
    } else {
        onlinePlayers[id] = { userData, userList: [context.socketID] };
    }
    context.notify({
        message: "Connected !",
        color: "teal",
        id: params.notifyId,
    });
    await calcMutate(id);
};
