import { Record } from "pocketbase";
import { ressource } from "./ressource.js";
import { buildingType } from "./building.js";

export interface quest extends Record {
    code: string;
    name: string;
    description: string;
    questsOnSuccess?: string;
    ressourcesNeeded: ressource;
    buildingOnSuccess: buildingType[];
}
