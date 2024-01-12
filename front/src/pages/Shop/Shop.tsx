import { Box } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { Record as pRecord } from "pocketbase";
import React, { useMemo } from "react";
import {
    useInfoContext,
    useQuestContext,
    useUserDataContext,
} from "../../scripts/Context";
import { endPoints, socket } from "../../scripts/globalVariables";
import { buildingType } from "../../scripts/interfaces/buildingType";
import useSubscribe from "../../scripts/pb/useSubscribe";
import ShopItem from "./ShopItem";

interface buildAmount extends pRecord {
    ligne_count: number;
    uID: string;
    type: buildingType;
}

// const BuildItem = lazy(() => import("./BuildItem"));
const Shop = () => {
    // ! Soit on trouve un moyen de ne plus utiliser le userData,
    // soit on divise ce contexte
    // un pour les data qui mutate tout le temps,
    // et un pour les données qui mutate peu souvent
    // comme unlocked building et autre

    // soit on fait un memo ici (on va commencer par ça c'est le plus simple)
    const { id } = useUserDataContext();
    const gameInfo = useInfoContext();

    const { unlockedBuildings } = useQuestContext();

    const { records } = useSubscribe<buildAmount>(
        "buildingCount",
        (obj) => obj,
        (e, _setRecords, invalidate) => {
            // ! TODO
            // on vérifie que e.record soit bien à nous
            // ET que ce soit pas e.action="update"
            // si c'est le cas soit on invalidate,
            // soit on fait le calcul nous même
            // cad + ou - là où il faut
            if (e.record.uID === id) {
                invalidate();
            }
        },
        `uID="${id}"`,
        "buildings"
    );

    const build = (buildingKey: string, _noClose: boolean) => {
        let id = randomId();
        let callback = (success: boolean) => {
            if (success) {
            }
        };
        // !noClose && close();
        notifications.show({
            id,
            message: "Building...",
            loading: true,
            autoClose: false,
        });
        socket.emit(
            endPoints.addBuilding,
            { buildingKey, notifyId: id },
            callback
        );
    };

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: `repeat(auto-fit, minmax(${300}px, 1fr))`,
                gridTemplateRows: "repeat(auto-fit, 300px)",
                gap: `${8}px`,
            }}
            w={"100%"}
            h={"100%"}
        >
            {useMemo(
                () => (
                    <>
                        {[...new Set(unlockedBuildings).values()].map(
                            (buildingKey) => {
                                let element = gameInfo.get(buildingKey);
                                if (!element || element.type === "ressource")
                                    return <React.Fragment key={buildingKey} />;
                                return (
                                    <ShopItem
                                        build={build}
                                        infoRecord={element}
                                        buildingKey={buildingKey}
                                        key={buildingKey}
                                        buildAmount={
                                            records.find(
                                                (el, _id) =>
                                                    el.type === buildingKey
                                            )?.ligne_count
                                        }
                                    />
                                );
                            }
                        )}
                    </>
                ),
                [unlockedBuildings.length]
            )}
        </Box>
    );
};

export default Shop;
