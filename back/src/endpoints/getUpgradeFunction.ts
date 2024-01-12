import { endPointfunction } from "../interfaces/endPointfunction.js";
import f from "../scripts/utils/f.js";

const getUpgradeFunction: endPointfunction<{ param: number }> = async (
    { param },
    context,
    callback
) => {
    callback(f(param));
};

export default getUpgradeFunction;
