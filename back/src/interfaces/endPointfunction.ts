import { context } from "./context.js";

export type endPointfunction<T> = (
    params: T & { notifyId?: string },
    context: context,
    callback: (...params: any) => {}
) => Promise<void>;
