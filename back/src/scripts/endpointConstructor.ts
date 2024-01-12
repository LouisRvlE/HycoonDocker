import { Socket } from "socket.io";
import { addBuilding } from "../endpoints/addBuilding.js";
import { updateID } from "../endpoints/updateID.js";
import { disconnect } from "../endpoints/disconnect.js";
import { upgradeBuilding } from "../endpoints/upgradeBuilding.js";
import { deleteBuilding } from "../endpoints/deleteBuilding.js";
import { log } from "../endpoints/log.js";
import { context } from "../interfaces/context.js";
import { endPointfunction } from "../interfaces/endPointfunction.js";
import { giveRessources } from "../endpoints/giveRessources.js";
import { setRessources } from "../endpoints/setRessources.js";
import { clearRessources } from "../endpoints/clearRessources.js";
import { finishQuest } from "../endpoints/finishQuest.js";
import { logout } from "../endpoints/logout.js";
import { changeClock } from "../endpoints/changeClock.js";

const ends: Record<string, endPointfunction<any>> = {
    updateID,
    addBuilding,
    upgradeBuilding,
    deleteBuilding,
    disconnect,
    log,
    logout,
    giveRessources,
    setRessources,
    clearRessources,
    finishQuest,
    changeClock
};

const endpointConstructor = (context: context, socket: Socket) => {
    Object.keys(ends).forEach((key) => {
        const func = ends[key];
        socket.on(key, (params, callback) => {
            context.queue.enqueue(() => func(params, context, callback));
        });
    });
};

export default endpointConstructor;
