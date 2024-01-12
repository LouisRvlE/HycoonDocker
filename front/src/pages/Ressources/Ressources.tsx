import { ActionIcon, Flex, Title } from "@mantine/core";
import {  useRessourcesContext, useRessourcesDataContext, useUserDataContext } from "../../scripts/Context";
import RessourcesArea from "./RessourcesArea";
import { IconPin, IconPinnedOff, IconTrash } from "@tabler/icons-react";
import { useMemo } from "react";
import pb from "../../scripts/pb/pb";
import { collections } from "../../scripts/pb/collections";

const Wrapper = ({
    children,
    name = "",
}: {
    children: React.ReactNode;
    name?: string;
}) => {
    const { pinned } = useRessourcesDataContext();
    const { id } = useUserDataContext();
    const isPinned = pinned.includes(name);
    const setPinned = () => {
        id &&
            pb.collection(collections.users).update(id, {
                pinned: isPinned
                    ? pinned.filter((el) => el !== name)
                    : [...pinned, name],
            });
    };

    return (
        <>
            {useMemo(
                () => (
                    <Flex
                        h={"100%"}
                        w={"100%"}
                        // justify={"space-between"}
                        gap={"xs"}
                        align={"center"}
                    >
                        <ActionIcon
                            onClick={setPinned}
                            variant="transparent"
                            color={isPinned ? "indigo" : "gray.5"}
                            size={"xs"}
                            bg={"#555555aa"}
                            sx={{ boxShadow: " 0 0 3px #555" }}
                        >
                            {isPinned ? <IconPinnedOff /> : <IconPin />}
                        </ActionIcon>
                        {children}
                    </Flex>
                ),
                [isPinned]
            )}
        </>
    );
};

const Ressources = () => {
    const {id} = useUserDataContext();
    const {ressources} = useRessourcesContext();
    const clearPinned = () => {
        id &&
            pb.collection(collections.users).update(id, {
                pinned: [],
            });
    };
    return (
        <Flex sx={{ color: "white" }} direction={"column"} gap={16}>
            <Title> Ressources </Title>

            <ActionIcon c={"red"} variant="light" onClick={clearPinned}>
                <IconTrash />
            </ActionIcon>
            <RessourcesArea
                Wrapper={Wrapper}
                ressources={ressources}
            />
        </Flex>
    );
};

export default Ressources;
