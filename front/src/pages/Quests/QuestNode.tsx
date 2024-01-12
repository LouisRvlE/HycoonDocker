import {
    ActionIcon,
    Card,
    Divider,
    Flex,
    Text
} from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconArrowBadgeRightFilled, IconCircleOff } from "@tabler/icons-react";
import { memo, useMemo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { socket } from "../../scripts/globalVariables";
import { questRecord } from "../../scripts/interfaces/quest";
import objectKeys from "../../scripts/utils/objectKeys";
import Building from "./Building";
import RessourcesNeeded from "./RessourcesNeeded";
import { nodeSize, ressourceHeight } from "./variables";
import { useQuestContext, useRessourcesContext } from "../../scripts/Context";

const QuestNode = ({
    data,
    targetPosition = Position.Left,
    sourcePosition = Position.Right,
}: Omit<NodeProps, "data"> & { data: questRecord }) => {;
    const { unlockedQuests } = useQuestContext();
    const { ressources } = useRessourcesContext()
    const isFullfilled = useMemo(() => {
        let isFullfilled = true;
        objectKeys(data.ressourcesNeeded).forEach((key) => {
            if (data.ressourcesNeeded[key] > (ressources[key] || 0)) {
                isFullfilled = false;
            }
        });
        return isFullfilled;
    }, [
        ...objectKeys(data.ressourcesNeeded).map(
            (key) => data.ressourcesNeeded[key]
        ),
        ...objectKeys(data.ressourcesNeeded).map((key) => ressources[key]),
    ]);

    const isEnded = useMemo(
        () => unlockedQuests.includes(data.id),
        [unlockedQuests]
    );

    const handleClick = () => {
        let id = randomId();
        notifications.show({
            message: "Submitting quest completion...",
            loading: true,
            color: "teal",
            id,
        });
        socket.emit(
            "finishQuest",
            { questId: data.id, notifyId: id },
            () => {}
        );
    };

    return (
        <>
            <Handle
                style={{ opacity: 0 }}
                type="target"
                position={targetPosition}
                isConnectable={false}
            />
            <Card
                sx={(theme) => ({
                    opacity: isEnded ? 0.75 : 1,
                    background: isEnded
                        ? theme.fn.linearGradient(
                              90 + 45,
                              theme.colors.dark[8],
                              theme.colors.teal[9]
                          )
                        : "",
                })}
                withBorder
                // sx={{ color: "black" }}
                h={
                    nodeSize.height +
                    objectKeys(data.ressourcesNeeded).length * ressourceHeight
                }
                w={nodeSize.width}
            >
                <Flex
                    w={"100%"}
                    h={"100%"}
                    direction={"column"}
                    align={"center"}
                    justify={"space-between"}
                >
                    <Flex
                        direction={"column"}
                        w={"100%"}
                        align={"center"}
                        gap={"xs"}
                    >
                        <Text size={20}>{data?.name}</Text>
                        <Divider w={"40%"} mb={"sm"} />
                        <Text color="dimmed" size={16}>
                            {data?.description}
                        </Text>
                        <Flex
                            w={"100%"}
                            justify={"space-between"}
                            align={"end"}
                            gap={"md"}
                        >
                            <Flex
                                sx={{ flex: 1 }}
                                direction={"column"}
                                gap={"xs"}
                            >
                                {objectKeys(data.ressourcesNeeded).map(
                                    (el, id) => {
                                        return (
                                            <RessourcesNeeded
                                                isEnded={isEnded}
                                                actualQuantity={
                                                    ressources[el] || 0
                                                }
                                                ressource={el}
                                                quantity={
                                                    data.ressourcesNeeded[el]
                                                }
                                                key={id}
                                            />
                                        );
                                    }
                                )}
                            </Flex>
                            <ActionIcon
                                variant="pixel"
                                color={
                                    isFullfilled && !isEnded ? "orange" : "gray"
                                }
                                disabled={!isFullfilled || isEnded}
                                onClick={handleClick}
                            >
                                <IconArrowBadgeRightFilled />
                            </ActionIcon>
                        </Flex>
                    </Flex>
                    <Divider w={"80%"} my="sm" />

                    <Text w={"100%"} align="start">
                        Unlocks :
                    </Text>
                    {data.buildingOnSuccess.length > 0 ? (
                        <Flex
                            wrap={"wrap"}
                            gap={4}
                            justify={"center"}
                            align={"center"}
                        >
                            {data.buildingOnSuccess.map((el, id) => {
                                return <Building buildingKey={el} key={id} />;
                            })}
                        </Flex>
                    ) : (
                        <IconCircleOff />
                    )}
                </Flex>
            </Card>
            <Handle
                style={{ opacity: 0 }}
                type="source"
                position={sourcePosition}
                isConnectable={false}
            />
        </>
    );
};

QuestNode.displayName = "QuestNode";

export default memo(QuestNode);
