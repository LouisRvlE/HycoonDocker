import {
    Button,
    Card,
    Flex,
    ScrollArea,
    Tabs,
    Text,
    Title,
} from "@mantine/core";
import { IconBuilding, IconSquareDot } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { useInfoContext } from "../../../scripts/Context";
import { parseName } from "../../../scripts/utils/parseName";
import ressourceItemParser from "../../../scripts/utils/ressourceItemParser";
import RessourcesArea from "../../Ressources/RessourcesArea";
const types = ["cost", "inputs", "outputs"] as const;

const GameInfo = () => {
    const infos = useInfoContext();
    return (
        <>
            <Button
                variant="pixel"
                component={NavLink}
                to="/Game/AdminPanel/GameInfo/Modifier"
            >
                Go to modifier
            </Button>

            <Flex my={"xs"} gap={"xs"} wrap={"wrap"} justify={"space-between"}>
                {[...infos.entries()]
                    .sort((a, b) => a[1].score - b[1].score)
                    .map(([key, element]) => (
                        <Card sx={{ flex: 1 }} miw={"300px"} key={key}>
                            <Title order={2} color={element.theme}>
                                <Flex
                                    gap={"xs"}
                                    align={"center"}
                                    justify={"space-between"}
                                >
                                    <Flex gap={"xs"} align={"center"}>
                                        {element.type === "building" ? (
                                            <IconBuilding />
                                        ) : (
                                            <IconSquareDot />
                                        )}
                                        {parseName(element.name)}
                                    </Flex>
                                    <Button
                                        color={element.theme}
                                        variant="pixel"
                                        component={NavLink}
                                        to={`/Game/AdminPanel/GameInfo/Modifier/${element.id}`}
                                        compact
                                    >
                                        Go to
                                    </Button>
                                </Flex>
                            </Title>
                            <Text>Score : {element.score}</Text>
                            <Text>Multiplier : {element.multiplier}</Text>
                            {element.type === "building" && (
                                <Tabs
                                    color={
                                        element.theme === "grey"
                                            ? "dark"
                                            : element.theme
                                    }
                                    sx={{
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                    defaultValue={"cost"}
                                >
                                    <Tabs.List mb={10}>
                                        {types.map((el) => (
                                            <Tabs.Tab key={el} value={el}>
                                                {parseName(el)}
                                            </Tabs.Tab>
                                        ))}
                                    </Tabs.List>

                                    {types.map((el, id) => (
                                        <Tabs.Panel
                                            sx={{ flex: 1 }}
                                            value={el}
                                            key={id}
                                        >
                                            <ScrollArea
                                                type="always"
                                                h={120}
                                                styles={(mantineTheme) => ({
                                                    scrollbar: {
                                                        ".mantine-ScrollArea-thumb":
                                                            {
                                                                backgroundColor:
                                                                    mantineTheme
                                                                        .colors?.[
                                                                        element
                                                                            .theme
                                                                    ]?.[3],
                                                                ":hover": {
                                                                    backgroundColor:
                                                                        mantineTheme
                                                                            .colors?.[
                                                                            element
                                                                                .theme
                                                                        ]?.[4],
                                                                },
                                                            },
                                                    },
                                                })}
                                            >
                                                <RessourcesArea
                                                    size={15}
                                                    ressources={
                                                        el === "cost"
                                                            ? element.info[el]
                                                            : ressourceItemParser(
                                                                  element.info[
                                                                      el
                                                                  ]
                                                              )
                                                    }
                                                />
                                            </ScrollArea>
                                        </Tabs.Panel>
                                    ))}
                                </Tabs>
                            )}
                        </Card>
                    ))}
            </Flex>
        </>
    );
};

export default GameInfo;
