import { BaseAuthStore } from "pocketbase";
import { useEffect, useState } from "react";
import { isAdmin } from "./isAdmin";
import { PromiseReturn, pb } from "./pb";

export function useAuthStore() {
    const [authStore, setAuthStore] = useState<{
        store: BaseAuthStore;
        id: number;
        status: PromiseReturn["status"];
    }>({
        store: pb.authStore,
        id: 0,
        status: isAdmin(),
    });
    useEffect(() => {
        const removeListener = pb.authStore.onChange(() => {
            setAuthStore((old: { store: BaseAuthStore; id: number }) => ({
                store: pb.authStore,
                id: old.id + 1,
                status: isAdmin(),
            }));
        }, false);
        return () => {
            removeListener();
        };
    }, []);

    return { auth: authStore?.store, status: authStore.status };
}
