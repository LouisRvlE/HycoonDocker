import { context } from "./interfaces/context.js";
import endpointConstructor from "./scripts/endpointConstructor.js";
import { firstCall } from "./scripts/globalData.js";
import io from "./scripts/io.js";
// un array d'id des players connectés

import eventsource from "eventsource";
import tick from "./scripts/tick.js";
import Queue from "./classes/Queue.js";
import { collections, pb } from "./scripts/pb.js";
global.EventSource = eventsource;
console.clear();

console.log("LAUNCHING...");

await firstCall();
tick();

io.on("connection", (socket) => {
    let context: context = {
        userID: "",
        socketID: socket.id,
        unsubList: [],
        queue: new Queue<() => Promise<void>>(),
        notify(notifyReturn) {
            socket.emit("notify", notifyReturn);
        },
    };

    endpointConstructor(context, socket);
});

console.log("LAUNCHED");
