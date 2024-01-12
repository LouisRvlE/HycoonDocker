import { Button, Card, Flex, ScrollArea, Tabs, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import f from "../../scripts/f";
import { infoRecord } from "../../scripts/interfaces/infoRecord";
import { parseName } from "../../scripts/utils/parseName";
import ressourceItemParser from "../../scripts/utils/ressourceItemParser";
import RessourcesArea from "../Ressources/RessourcesArea";

// type buildingAmountType = Record & { ligne_count: number };

const types = ["cost", "inputs", "outputs"] as const;

const ShopItem = ({
    buildingKey,
    infoRecord: { theme, info },
    build,
    buildAmount = 0,
}: {
    buildingKey: string;
    infoRecord: infoRecord;
    build: (buildingKey: string, noClose: boolean) => void;
    buildAmount?: number;
}) => {
    return (
        <Card withBorder w={"100%"} p={10} h={"300px"}>
            <Flex direction={"column"} h={"100%"}>
                <Flex mr={"xs"} justify={"space-between"} mb={"xs"}>
                    <Title color={theme} order={3}>
                        {parseName(buildingKey)}
                    </Title>
                    <Button
                        variant="pixel"
                        color={theme}
                        onClick={(e) => {
                            build(buildingKey, e.shiftKey);
                        }}
                    >
                        <IconPlus />
                    </Button>
                </Flex>
                <Tabs
                    color={theme === "grey" ? "dark" : theme}
                    sx={{ flex: 1, display: "flex", flexDirection: "column" }}
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
                        <Tabs.Panel sx={{ flex: 1 }} value={el} key={id}>
                            <ScrollArea
                                type="always"
                                h={120}
                                styles={(mantineTheme) => ({
                                    scrollbar: {
                                        ".mantine-ScrollArea-thumb": {
                                            backgroundColor:
                                                mantineTheme.colors?.[
                                                    theme
                                                ]?.[3],
                                            ":hover": {
                                                backgroundColor:
                                                    mantineTheme.colors?.[
                                                        theme
                                                    ]?.[4],
                                            },
                                        },
                                    },
                                })}
                            >
                                <RessourcesArea
                                    size={el === "cost" ? 15.1 : 15}
                                    ressources={
                                        el === "cost"
                                            ? info.cost
                                            : ressourceItemParser(info[el])
                                    }
                                    valueParser={
                                        el === "cost"
                                            ? (value: number) => {
                                                  return value + f(buildAmount);
                                              }
                                            : (v) => v
                                    }
                                />
                                {buildAmount}
                            </ScrollArea>
                        </Tabs.Panel>
                    ))}
                </Tabs>
            </Flex>
        </Card>
    );
};

export default ShopItem;
