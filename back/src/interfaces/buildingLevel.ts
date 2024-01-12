import { ressource } from "./ressource.js";
import { ressourceItem } from "./ressourceItem.js";

export interface buildingLevel {
    cost: ressource;
    inputs: ressourceItem[];
    outputs: ressourceItem[];
    workers: number;
}
