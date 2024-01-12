import { Record } from "pocketbase";
import { ressource } from "./ressource.js";
import { buildingType } from "./building.js";

export interface userData {
    incomes: Partial<ressource>;
    mutate: Partial<ressource>;
    ressources: Partial<ressource>;
    pinned: string[];
    username: string;
    unlockedBuildings: buildingType[];
    unlockedQuests: string[];
}
