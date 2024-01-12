import PocketBase from "pocketbase";

export const pb = new PocketBase("http://database:8080/");

pb.autoCancellation(false);

export const collections = {
    users: "strategyUsers",
    infos: "strategyInfos",
    buildings: "strategyBuildings",
    quests: "strategyQuests",
} as const;
