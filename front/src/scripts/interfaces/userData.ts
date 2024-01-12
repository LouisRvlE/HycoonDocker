import { Record as PRecord } from "pocketbase";
import { ressource } from "./ressource";
import { buildingType } from "./buildingType";

export type userDataRecord = userData & PRecord;

export interface userData {
    username: string;
    email: string;
    isAdmin: boolean;
    incomes: Partial<ressource>;
    mutate: Partial<ressource>;
    ressources: Partial<ressource>;
    pinned: string[];
    buildingScore: number;
    ressourcesScore: number;
    unlockedBuildings: buildingType[];
    unlockedQuests: string[];
}
