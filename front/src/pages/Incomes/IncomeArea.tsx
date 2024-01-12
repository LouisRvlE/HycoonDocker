import { ActionIcon, Flex, Title } from "@mantine/core";
import { IconPin, IconPinnedOff, IconTrash } from "@tabler/icons-react";
import { useMemo } from "react";
import pb from "../../scripts/pb/pb";
import { collections } from "../../scripts/pb/collections";
import RessourcesArea from "../Ressources/RessourcesArea";
import { useRessourcesDataContext, useUserDataContext } from "../../scripts/Context";

const Wrapper = ({
    children,
    name = "",
    sign,
}: {
    children: React.ReactNode;
    name?: string;
    sign?: React.ReactNode;
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
                        {sign}
                        {children}
                    </Flex>
                ),
                [isPinned]
            )}
        </>
    );
};

const Incomes = () => {
    const { id } = useUserDataContext()
    const { incomes } = useRessourcesDataContext()
    const clearPinned = () => {
        id &&
            pb.collection(collections.users).update(id, {
                pinned: [],
            });
    };
    return (
        <Flex sx={{ color: "white" }} direction={"column"} gap={16}>
            <Title> Incomes </Title>
            <ActionIcon c={"red"} variant="light" onClick={clearPinned}>
                <IconTrash />
            </ActionIcon>
            <RessourcesArea
                withSign
                Wrapper={Wrapper}
                ressources={incomes}
            />
        </Flex>
    );
};

export default Incomes;
