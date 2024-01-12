import { UnsubscribeFunc } from "pocketbase";
import Queue from "../classes/Queue.js";

export type context = {
    userID: string;
    unsubList: Promise<UnsubscribeFunc>[];
    socketID: string;
    queue: Queue<() => Promise<void>>;
    notify: (notifyReturnType) => void;
};
