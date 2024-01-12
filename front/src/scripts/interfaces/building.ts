import { Record as pRecord } from "pocketbase";
import { ressourceItem } from "./ressourceItem";
import { ressource } from "./ressource";
import { XYPosition } from "reactflow";

export interface building extends pRecord {
    uID: string;
    inputs: ressourceItem[];
    outputs: ressourceItem[];
    type: string;
    theme: string;
    icon: string;
    cost: Partial<ressource>;
    category: string;
    upgrades: {
        efficiency: number;
        ecology: number;
    };
    clock: number;
    position: XYPosition;
    navlink: string;
}
