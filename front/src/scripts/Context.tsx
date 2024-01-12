import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { buildingType } from "./interfaces/buildingType";
import { infoRecord } from "./interfaces/infoRecord";
import { ressource } from "./interfaces/ressource";
import { collections } from "./pb/collections";
import pb from "./pb/pb";
import { useUserDataHook } from "./pb/useUserData";
import { unsubcribe } from "./utils/unsubcribe";

type infoContextType = Map<string, infoRecord>;
const infoInitialEmptyValue = new Map<string, infoRecord>() as infoContextType;
export const InfoContext = createContext<infoContextType>(
    infoInitialEmptyValue
);

interface UDType {
    id: string;
    username: string;
    email: string;
    isAdmin: boolean;
    isValid: boolean;
}
export const UserDataContext = createContext<UDType>({
    id: "",
    username: "",
    email: "",
    isAdmin: false,
    isValid: false,
});

interface Quest {
    unlockedQuests: string[];
    unlockedBuildings: buildingType[];
}
export const QuestContext = createContext<Quest>({
    unlockedQuests: [],
    unlockedBuildings: [],
});

interface RessourcesType {
    ressources: Partial<ressource>;
    score: number;
}
export const RessourcesContext = createContext<RessourcesType>({
    ressources: {},
    score: 0,
});

interface RessourcesDataType {
    mutate: Partial<ressource>;
    incomes: Partial<ressource>;
    pinned: string[];
}
export const RessourcesDataContext = createContext<RessourcesDataType>({
    incomes: {},
    mutate: {},
    pinned: [] as string[],
});

export const Provider = (props: { children: React.ReactNode }) => {
    const [res, setRes] = useState<Map<string, infoRecord>>(
        new Map<string, infoRecord>()
    );
    const {
        userData: {
            id,
            username,
            email,
            isAdmin,
            unlockedBuildings,
            unlockedQuests,
            mutate,
            incomes,
            ressources,
            buildingScore,
            ressourcesScore,
            pinned,
        },
        isValid,
    } = useUserDataHook();

    const fetchGameInfo = async () => {
        const res: infoRecord[] = await pb
            .collection(collections.infos)
            .getFullList({
                sort: "-name",
            });
        let newInfos = new Map<string, infoRecord>();
        res.forEach((el, _id) => {
            newInfos.set(el.name, el);
        });
        setRes(newInfos);
    };

    const UserData = useMemo(
        () => ({
            id: id,
            username: username,
            email: email,
            isAdmin: isAdmin,
            isValid,
        }),
        [id, username, email, isAdmin, isValid]
    );
    const Quest = useMemo(
        () => ({
            unlockedBuildings: unlockedBuildings,
            unlockedQuests: unlockedQuests,
        }),
        [unlockedBuildings.length, unlockedQuests.length]
    );
    const SV = useMemo(
        () => ({
            mutate: mutate,
            incomes: incomes,
            pinned: pinned,
        }),
        [
            Object.values(mutate).join(),
            Object.values(incomes).join(),
            pinned.length,
        ]
    );
    const V = useMemo(
        () => ({
            ressources: ressources,
            score: buildingScore + ressourcesScore,
        }),
        [Object.values(ressources).join(), buildingScore, ressourcesScore]
    );

    useEffect(() => {
        fetchGameInfo();
        const unsub = pb.collection(collections.infos).subscribe("*", () => {
            fetchGameInfo();
        });
        return () => {
            unsubcribe(unsub);
        };
    }, []);
    return (
        <InfoContext.Provider value={res}>
            <UserDataContext.Provider value={UserData}>
                <QuestContext.Provider value={Quest}>
                    <RessourcesDataContext.Provider value={SV}>
                        <RessourcesContext.Provider value={V}>
                            {props.children}
                        </RessourcesContext.Provider>
                    </RessourcesDataContext.Provider>
                </QuestContext.Provider>
            </UserDataContext.Provider>
        </InfoContext.Provider>
    );
};
export const useInfoContext = () => {
    return useContext(InfoContext);
};
export const useUserDataContext = () => {
    return useContext(UserDataContext);
};
export const useQuestContext = () => {
    return useContext(QuestContext);
};
export const useRessourcesDataContext = () => {
    return useContext(RessourcesDataContext);
};
export const useRessourcesContext = () => {
    return useContext(RessourcesContext);
};
