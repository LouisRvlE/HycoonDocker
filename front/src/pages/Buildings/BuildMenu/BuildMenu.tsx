import { ActionIcon, Box, Drawer } from "@mantine/core";
import { randomId, useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconPlus } from "@tabler/icons-react";
import { Record as pRecord } from "pocketbase";
import React from "react";
import { useInfoContext, useQuestContext, useUserDataContext } from "../../../scripts/Context";
import { endPoints, socket } from "../../../scripts/globalVariables";
import { buildingType } from "../../../scripts/interfaces/buildingType";
import useSubscribe from "../../../scripts/pb/useSubscribe";
import BuildItem from "./BuildItem";

interface buildAmount extends pRecord {
    ligne_count: number;
    uID: string;
    type: buildingType;
}

// const BuildItem = lazy(() => import("./BuildItem"));
const BuildMenu = ({ invalidate }: { invalidate: () => void }) => {
    const [opened, { open, close }] = useDisclosure(false);
    // ! Soit on trouve un moyen de ne plus utiliser le userData,
    // soit on divise ce contexte
    // un pour les data qui mutate tout le temps,
    // et un pour les données qui mutate peu souvent
    // comme unlocked building et autre

    // soit on fait un memo ici (on va commencer par ça c'est le plus simple)
    const gameInfo = useInfoContext();
    const { id, } = useUserDataContext();
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

    const build = (buildingKey: string, noClose: boolean) => {
        let id = randomId();
        let callback = (success: boolean) => {
            if (success) {
                invalidate();
            }
        };
        !noClose && close();
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
    // ! TODO Il faut refaire le map
    //    on ne doit pas map TOUTES les infos, mais seulement
    //    les unlockedBulidings
    //    Etant donné que c'est de type buildingType[]
    //    Ce sera déjà moins lourd

    return (
        <>
            <ActionIcon
                w={40}
                h={40}
                variant="pixel"
                pos={"fixed"}
                bottom={0}
                right={0}
                onClick={open}
                m={16}
                color={"teal"}
            >
                <IconPlus />
            </ActionIcon>
            <Drawer
                size={"xl"}
                opened={opened}
                onClose={close}
                position="right"
                keepMounted
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: `repeat(auto-fit, minmax(${300}px, 1fr))`,
                        gap: `${8}px`,
                    }}
                    w={"100%"}
                    h={"100%"}
                >
                    {[...gameInfo.entries()].map(([buildingKey, element]) => {
                        if (
                            element.type !== "building" ||
                            !unlockedBuildings.includes(element.name)
                        )
                            return <React.Fragment key={buildingKey} />;
                        return (
                            <BuildItem
                                build={build}
                                infoRecord={element}
                                buildingKey={buildingKey}
                                key={buildingKey}
                                buildAmount={
                                    records.find(
                                        (el, _id) => el.type === buildingKey
                                    )?.ligne_count
                                }
                            />
                        );
                    })}
                </Box>
            </Drawer>
        </>
    );
};

export default BuildMenu;
