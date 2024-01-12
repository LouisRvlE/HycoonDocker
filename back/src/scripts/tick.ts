import calcRessources from "../calculs/calcRessource.js";
import { onlinePlayers } from "./globalData.js";
import objectKeys from "./utils/objectKeys.js";

const tick = () => {
    setInterval(async () => {
        objectKeys(onlinePlayers).forEach(async (p) => {
            calcRessources(p);
        });
    }, 1000);
};

export default tick;
