import { Record as PocketRecord } from "pocketbase";
import { ressourceItem } from "./ressourceItem.js";
import { ressource } from "./ressource.js";

export type buildingType =
    | "titane_mine"
    | "copper_mine"
    | "silicium_mine"
    | "house"
    | "copper_factory"
    | "titane_factory"
    | "oil_well"
    | "oil_refinery"
    | "bio_refinery"
    | "bacterial_vat"
    | "electronic_factory"
    | "automatic_wood_chopper"
    | "compost"
    | "salt_mine"
    | "hydroponic_farm"
    | "life_incubator"
    | "food_processor"
    | "filter_factory"
    | "atmospheric_filter";

export type building = PocketRecord & build;

export interface build {
    uID: string;
    type: string;
    inputs: ressourceItem[];
    outputs: ressourceItem[];
    cost: Partial<ressource>;
    upgrades: {
        efficiency: number;
        ecology: number;
    };
    category: string;
    clock: number;
    position?: { "x": number, "y": number };
    navlink?: string;
}
