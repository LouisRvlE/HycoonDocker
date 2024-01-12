import { ressourceItem } from "./ressourceItem";

export type formReturnType = {
    id: string;
    label: string;
    name: string;
    info: {
        cost: ressourceItem[];
        inputs: ressourceItem[];
        outputs: ressourceItem[];
    };
    icon: string;
    theme: string;
    type: string;
    category: string;
    score: number;
    multiplier: number;
    navlink: string;
    defaultPosition: { "x": number, "y": number };
};
