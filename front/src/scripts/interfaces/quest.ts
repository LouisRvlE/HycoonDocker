import { Record } from "pocketbase";
import { buildingType } from "./buildingType";
import { ressource } from "./ressource";

export type questRecord = questType & Record;

export type questType = {
    name: string;
    description: string;
    questsOnSuccess: string[];
    buildingOnSuccess: buildingType[];
    ressourcesNeeded: ressource
};
