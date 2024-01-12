import { Record, RecordSubscription } from "pocketbase";
import { useEffect, useState } from "react";
import { unsubcribe } from "../utils/unsubcribe";
import { collections } from "./collections";
import pb from "./pb";

export type onSubEvent<T extends Record, U extends { id: string }> = (
    e: RecordSubscription<T>,
    setRecords: React.Dispatch<React.SetStateAction<U[]>>,
    invalidate: () => Promise<void>,
    onEachMutate: (obj: T) => U
) => void;

function useSubscribe<T extends Record, U extends { id: string } = T>(
    collection: keyof typeof collections,
    onEachMutate: (obj: T) => U,
    onSubEvent: onSubEvent<T, U> | undefined = undefined,
    filter: string = "",
    subingCollection: keyof typeof collections = collection
) {
    const defaultOnSubEvent: onSubEvent<T, U> = (
        e: RecordSubscription<T>,
        setRecords: React.Dispatch<React.SetStateAction<U[]>>,
        _invalidate: () => Promise<void>,
        onEachMutate: (obj: T) => U
    ) => {
        if (e.action === "create") {
            setRecords((old) => [...old, onEachMutate(e.record)]);
        } else if (e.action === "update") {
            setRecords((old) =>
                old.map((el) => {
                    if (el.id === e.record.id) {
                        return onEachMutate(e.record);
                    }
                    return el;
                })
            );
        } else {
            setRecords((old) => old.filter((el) => el.id !== e.record.id));
        }
    };
    const [records, setRecords] = useState<U[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [fastLoading, setFastLoading] = useState<boolean>(true);

    const getDefaultData = async () => {
        let res: T[] = await pb
            .collection(collections[collection])
            .getFullList({ filter });
        setRecords(res.map(onEachMutate));
        setLoading(false);
    };

    const sub = () => {
        return pb
            .collection(collections[subingCollection])
            .subscribe("*", (e: RecordSubscription<T>) => {
                if (onSubEvent === undefined) onSubEvent = defaultOnSubEvent;
                setFastLoading(true);
                onSubEvent(e, setRecords, getDefaultData, onEachMutate);
                setFastLoading(false);
            });
    };

    useEffect(() => {
        getDefaultData();
        let unsub = sub();
        return () => {
            unsubcribe(unsub);
        };
    }, []);
    return { records, loading, fastLoading };
}

export default useSubscribe;
