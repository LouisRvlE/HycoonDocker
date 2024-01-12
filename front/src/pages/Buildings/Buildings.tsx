import {
    Accordion,
    Box,
    Card,
    Flex,
    Loader,
    SegmentedControl,
    Text,
    Title,
    useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";
import { useInfoContext } from "../../scripts/Context";
import { building } from "../../scripts/interfaces/building";
import { ressource } from "../../scripts/interfaces/ressource";
import { collections } from "../../scripts/pb/collections";
import pb from "../../scripts/pb/pb";
import objectKeys from "../../scripts/utils/objectKeys";
import { parseName } from "../../scripts/utils/parseName";
import RessourcesArea from "../Ressources/RessourcesArea";
import BuildMenu from "./BuildMenu/BuildMenu";
import Building from "./Building";
import { useAuthStore } from "../../scripts/pb/useAuthStore";

type value = "factory" | "mine" | "home" | "other";

const buildingCategorie: { label: string; value: value }[] = [
    { label: "Mines", value: "mine" },
    { label: "Factories", value: "factory" },
    { label: "Home", value: "home" },
    { label: "Other", value: "other" },
];

type buildingList = Record<
    string,
    {
        outputs: ressource;
        inputs: ressource;
        list: building[];
    }
>;

const Buildings = () => {
    const [buildings, setBuildingList] = useState<buildingList>({});
    const [buildingValue, setBuildingValue] = useState<value>("mine");
    // const [isMap, setIsMap] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const filterByType = async () => {
        setLoading(true);
        let filter = `${selfFilter} && category="${buildingValue}"`;
        const newList: buildingList = {};
        let result: building[];
        try {
            result = await pb
                .collection(collections.buildings)
                .getFullList({ filter });
        } catch (err) {
            result = [];
            console.warn(err);
        }

        result.forEach((building) => {
            let key = building.type;
            key ??= "other";
            newList[key] ??= {
                list: [],
                outputs: {} as ressource,
                inputs: {} as ressource,
            };
            newList[key].list.push(building);
            building.inputs.forEach(({ ressource, value }) => {
                newList[key].inputs[ressource] ??= 0;
                newList[key].inputs[ressource] += value;
            });
            building.outputs.forEach(({ ressource, value }) => {
                newList[key].outputs[ressource] ??= 0;
                newList[key].outputs[ressource] += value;
            });
        });

        setBuildingList(newList);
        setLoading(false);
    };
    const authStore = useAuthStore();
    const infos = useInfoContext();

    const selfFilter = `uID="${authStore.auth.model?.id}"`;

    const update = () => {
        authStore.auth.model?.id && filterByType();
    };

    useEffect(() => {
        update();
    }, [authStore.auth.model?.id, buildingValue]);
    const theme = useMantineTheme();
    const matches = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const buildingList = useMemo(() => objectKeys(buildings), [buildings]);
    return (
        <>
            <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Flex gap={"xs"}>
                    <SegmentedControl
                        disabled={loading}
                        value={buildingValue}
                        data={buildingCategorie}
                        onChange={(value: value) => setBuildingValue(value)}
                    />
                    {loading && <Loader scale={0.75} color="indigo" />}
                </Flex>
                {/* <Switch size="xs" onLabel={<IconMap size={12}/>} offLabel={<IconTable size={12}/> } onChange={(e)=>setIsMap(e.currentTarget.checked)} /> */}
            </Flex>
            {useMemo(
                () => (
                    <>
                        {buildingList.length === 0 ? (
                            <Text m={"md"} color="dimmed">
                                No one here
                            </Text>
                        ) : (
                            <Accordion
                                my={"xs"}
                                chevronPosition="left"
                                multiple
                                variant="separated"
                                loop
                                defaultValue={[buildingList[0]]}
                            >
                                {buildingList.map((buildingKey) => {
                                    const info = infos.get(buildingKey);
                                    return (
                                        <Accordion.Item
                                            key={buildingKey}
                                            value={buildingKey}
                                        >
                                            <Accordion.Control
                                                sx={{
                                                    ":hover": {
                                                        backgroundColor:
                                                            "transparent",
                                                    },
                                                }}
                                            >
                                                <Flex
                                                    wrap={"wrap"}
                                                    gap={"xs"}
                                                    direction={
                                                        matches
                                                            ? "column"
                                                            : "row"
                                                    }
                                                >
                                                    <Box miw={"200px"}>
                                                        <Title
                                                            order={3}
                                                            color={info?.theme}
                                                        >
                                                            {parseName(
                                                                buildingKey
                                                            )}
                                                        </Title>
                                                        <Text>
                                                            {
                                                                buildings[
                                                                    buildingKey
                                                                ].list.length
                                                            }{" "}
                                                            buildings
                                                        </Text>
                                                    </Box>
                                                    <Flex
                                                        gap={"xs"}
                                                        sx={{ flex: 1 }}
                                                    >
                                                        {objectKeys(
                                                            buildings[
                                                                buildingKey
                                                            ].inputs
                                                        ).length ? (
                                                            <Card
                                                                w={
                                                                    "fit-content"
                                                                }
                                                                // h={"100%"}
                                                                sx={{ flex: 1 }}
                                                                p={"xs"}
                                                                withBorder
                                                            >
                                                                <Text
                                                                    size={"xs"}
                                                                >
                                                                    Inputs
                                                                </Text>
                                                                <RessourcesArea
                                                                    size={10}
                                                                    ressources={
                                                                        buildings[
                                                                            buildingKey
                                                                        ].inputs
                                                                    }
                                                                />
                                                            </Card>
                                                        ) : (
                                                            <></>
                                                        )}
                                                        {objectKeys(
                                                            buildings[
                                                                buildingKey
                                                            ].outputs
                                                        ).length ? (
                                                            <Card
                                                                w={
                                                                    "fit-content"
                                                                }
                                                                sx={{ flex: 1 }}
                                                                withBorder
                                                                p={"xs"}
                                                                // h={"100%"}
                                                            >
                                                                <Text
                                                                    size={"xs"}
                                                                >
                                                                    Outputs
                                                                </Text>
                                                                <RessourcesArea
                                                                    size={10}
                                                                    ressources={
                                                                        buildings[
                                                                            buildingKey
                                                                        ]
                                                                            .outputs
                                                                    }
                                                                />
                                                            </Card>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </Flex>
                                                </Flex>
                                            </Accordion.Control>
                                            <Accordion.Panel>
                                                <Box
                                                    key={buildingKey}
                                                    sx={{
                                                        display: "grid",
                                                        gridTemplateColumns: `repeat(auto-fit, minmax(${300}px, 1fr))`,
                                                        gap: `${8}px`,
                                                    }}
                                                >
                                                    {buildings[
                                                        buildingKey
                                                    ].list.map((el) => (
                                                        <Building
                                                            info={info}
                                                            invalidate={
                                                                filterByType
                                                            }
                                                            buildingKey={
                                                                buildingKey
                                                            }
                                                            building={el}
                                                            key={el.id}
                                                        />
                                                    ))}
                                                </Box>
                                            </Accordion.Panel>
                                        </Accordion.Item>
                                    );
                                })}
                            </Accordion>
                        )}
                        <BuildMenu invalidate={filterByType} />
                    </>
                ),
                [buildingList, matches, infos, buildingValue]
            )}
        </>
    );
};

export default Buildings;
