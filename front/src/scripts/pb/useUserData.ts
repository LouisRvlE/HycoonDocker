import { useEffect, useState } from "react";
import { userDataRecord } from "../interfaces/userData";
import { unsubcribe } from "../utils/unsubcribe";
import { collections } from "./collections";
import { pb } from "./pb";
import { useAuthStore } from "./useAuthStore";

export function useUserDataHook() {
    const { auth } = useAuthStore();
    const [userData, setUserData] = useState<userDataRecord>({
        isAdmin: false,
        email: "",
        incomes: {},
        mutate: {},
        ressources: {},
        pinned: [],
        buildingScore: 0,
        ressourcesScore: 0,
        unlockedBuildings: [],
        unlockedQuests: [],
        id: "",
    } as unknown as userDataRecord);

    const setDefaultData = async () => {
        if (!auth?.model?.id) return;
        const res: userDataRecord = await pb
            .collection(collections.users)
            .getOne(auth?.model?.id);
        setUserData(res);
    };

    useEffect(() => {
        if (!auth?.model?.id) return () => {};
        setDefaultData();
        const unsub = pb
            .collection(collections.users)
            .subscribe(auth?.model?.id, (event) => {
                setUserData(event.record as userDataRecord);
            });
        return () => {
            unsubcribe(unsub);
        };
    }, [auth?.model?.id]);

    return { userData, isValid: auth.isValid };
}
