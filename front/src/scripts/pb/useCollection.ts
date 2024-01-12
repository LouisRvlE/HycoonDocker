import {
    UnsubscribeFunc,
    Record,
    RecordQueryParams,
    RecordListQueryParams,
} from "pocketbase";
import { useEffect, useState } from "react";
import { useCollectionOptions, pb } from "./pb";
import { notifications } from "@mantine/notifications";

// < !-- // HOOK \\ --! > \\

export function useCollection<T extends Record>(
    collection: string,
    defaultValue: any = [],
    {
        queryParams: defaultQueryParams,
        realtime,
        pageParams: newPageParams,
    }: useCollectionOptions = {}
    // callbackOnUpdate?: () => void
) {
    const pageParams = { page: 1, perPage: 50, ...newPageParams };
    interface base {
        items: T[];
        others?: {
            page: number;
            perPage: number;
            totalItems: number;
        };
    }
    const [result, setResult] = useState<base>({ items: defaultValue });
    const [loading, setLoading] = useState<boolean>(true);
    const [params, setParams] = useState<RecordQueryParams>(
        defaultQueryParams || {}
    );

    const getList = async (
        newQueryParams: RecordListQueryParams = {},
        reset: boolean = false
    ) => {
        try {
            let newParsedQueryParams: RecordListQueryParams = {
                ...params,
                ...newQueryParams,
            };
            if (reset) {
                newParsedQueryParams = defaultQueryParams
                    ? defaultQueryParams
                    : {};
            }
            setLoading(true);
            setParams(newParsedQueryParams);
            const { items, page, perPage, totalItems } = await pb
                .collection(collection)
                // .getFullList(200, newParsedQueryParams);
                .getList(
                    pageParams.page,
                    pageParams.perPage,
                    newParsedQueryParams
                );
            setResult({
                items: items as T[],
                others: { page, perPage, totalItems },
            });
        } catch (e) {
            notifications.show({
                message: "Impossible d'executer la requête",
                title: "Erreur !",
            });
        }
        setLoading(false);
    };

    const unsubcribe = async (unsub: Promise<UnsubscribeFunc>) => {
        unsub && (await unsub)();
    };

    useEffect(() => {
        getList();
        let unsub: Promise<UnsubscribeFunc>;
        if (realtime)
            unsub = pb.collection(collection).subscribe("*", () => getList());

        return () => {
            unsubcribe(unsub);
        };
    }, []);

    return {
        records: result.items.reverse(),
        invalidate: getList,
        loading,
        otherResult: result.others,
    };
}
