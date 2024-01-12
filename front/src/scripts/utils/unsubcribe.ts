import { UnsubscribeFunc } from "pocketbase";

export async function unsubcribe(unsub: Promise<UnsubscribeFunc>) {
    unsub && (await unsub)();
}
