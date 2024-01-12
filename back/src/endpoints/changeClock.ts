import calcMutate from "../calculs/calcMutate.js";
import { endPointfunction } from "../interfaces/endPointfunction.js";
import { onlinePlayers } from "../scripts/globalData.js";
import { collections, pb } from "../scripts/pb.js";

export const changeClock: endPointfunction<{
    buildingID: string;
    clock: number;
}> = async (params, context, callback) => {
    if (!context.userID) {
        context.notify({ message: "awaiting connection" });
        callback(false)
        return;
    }

    try {
        await pb.collection(collections.buildings).update(params.buildingID, { clock: params.clock })
    } catch(err) {
        console.log(err)
        callback(false)
    }

    calcMutate(context.userID)

    callback(true)
};