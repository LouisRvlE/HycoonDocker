import { ressourceType } from "./ressourceType.js";

interface mutate {
    inputs: sumItem;
    outputs: sumItem;
}

export interface sumItem {
    inputs?: Partial<Record<ressourceType, number>>;
    outputs?: Partial<Record<ressourceType, number>>;
}

export default mutate;
