import { Record as PocketRecord } from "pocketbase";
import { buildingLevel } from "./buildingLevel.js";
import { ressourceItem } from "./ressourceItem.js";
import { ressource } from "./ressource.js";

export interface info extends PocketRecord {
    name: string;
    label: string;
    info: {
        inputs: ressourceItem[];
        outputs: ressourceItem[];
        cost: ressource;
    };
    category: string;
    icon?: string;
    theme: string;
    type: "standalone" | "building" | "ressource";
    score: number;
    multiplier: number;
    defaultPosition: { "x": number, "y": number }
}