import eventsource from "eventsource";
import { collections, pb } from "./pb.js";
import { info } from "../interfaces/info.js";
import { userData } from "../interfaces/userData.js";
global.EventSource = eventsource;
export const onlinePlayers: Record<
    string,
    { userList: string[]; userData: userData }
> = {}; // une sorte de super array
export let strategyInfos = new Map<string, info>();

export const firstCall = async () => {
    try {
        let res: info[] = await pb.collection(collections.infos).getFullList();
        res.forEach((el, _id) => {
            strategyInfos.set(el.name, el);
        });
    } catch {
        console.log("no bulding");
    }
};

pb.collection(collections.infos).subscribe("*", (e) => {
    if (e.action === "create" || e.action === "update") {
        strategyInfos.set(e.record.name, e.record as info);
    } else if (e.action === "delete") {
        strategyInfos.delete(e.record.name);
    }
});

export const multipliers = {
    ecology: 1.2,
    efficiency: 0.9,
};
