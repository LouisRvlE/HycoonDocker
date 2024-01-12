import { ressource } from "../interfaces/ressource";
import { ressourceItem } from "../interfaces/ressourceItem";

function ressourceItemParser(
    ressources: ressourceItem[],
    valueModifier: (value: number) => number = (value) => value
): Partial<ressource> {
    const parsedRessouces: Partial<ressource> = {};

    ressources.forEach(
        ({ value, ressource }) =>
            (parsedRessouces[ressource] = valueModifier(value))
    );
    return parsedRessouces;
}

export default ressourceItemParser;
