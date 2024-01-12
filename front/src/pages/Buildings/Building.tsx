import {
    ActionIcon,
    Card,
    Flex,
    Kbd,
    LoadingOverlay,
    Progress,
    Slider,
    Text,
    Title,
    useMantineTheme
} from "@mantine/core";
import { randomId, useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import {
    IconClockBolt,
    IconFlare,
    IconLeaf,
    IconTrash
} from "@tabler/icons-react";
import { useMemo } from "react";
import { endPoints, socket } from "../../scripts/globalVariables";
import { building } from "../../scripts/interfaces/building";
import { infoRecord } from "../../scripts/interfaces/infoRecord";
import { upgradeFunc, upgradeProps } from "../../scripts/interfaces/upgrade";
import { parseName } from "../../scripts/utils/parseName";
import ressourceItemParser from "../../scripts/utils/ressourceItemParser";
import RessourcesArea from "../Ressources/RessourcesArea";
import Upgarde from "./Upgarde";

const upgrades: upgradeProps[] = [
    { upgradeType: "ecology", icon: <IconLeaf />, color: "teal" },
    { upgradeType: "efficiency", icon: <IconFlare />, color: "brown" },
];

const Building = ({
    buildingKey,
    building,
    invalidate,
    info,
}: {
    buildingKey: string;
    building: building;
    invalidate: () => void;
    info: infoRecord | undefined;
}) => {
    const [openned, { open, close }] = useDisclosure();
    const theme = useMantineTheme();

    const upgrade: upgradeFunc = (upgradeType) => {
        open();
        let id = randomId();
        notifications.show({ id, message: "Loading...", autoClose: false });
        socket.emit(
            endPoints.upgradeBuilding,
            { buildingID: building.id, upgradeType, notifyId: id },
            (success: boolean) => {
                if (success) invalidate();
                close();
            }
        );
    };
    const deleteBuilding = () => {
        open();
        socket.emit(
            endPoints.deleteBuilding,
            { buildingID: building.id },
            (success: boolean) => {
                if (success) {
                    invalidate();
                } else {
                    close();
                }
            }
        );
    };
    const changeClock = async (value: number) => {
        const res = await socket.emitWithAck("changeClock", {
            buildingID: building.id,
            clock: value,
        });
        res && invalidate()
    };

    return useMemo(
        () => (
            <Card sx={{ flex: 1 }} miw={"300px"} pos={"relative"}>
                <Flex gap={"xs"} justify={"space-between"} align={"start"}>
                    <Title pb={"lg"} color={info?.theme} order={4}>
                        {parseName(buildingKey)}{" "}
                        {Math.round(
                            building.id
                                .slice(0, 5)
                                .split("")
                                .map((el) => el.charCodeAt(0))
                                .reduce((prev, curr) => prev + curr, 0)
                        )}
                    </Title>
                    <Flex gap={3}>
                        <Flex direction={"column"} gap={4} align={"center"}>
                            <Flex gap={3}>
                                {upgrades.map((el, id) => (
                                    <Upgarde
                                        key={id}
                                        actualLevel={building.upgrades}
                                        {...el}
                                        upgrade={upgrade}
                                    />
                                ))}
                            </Flex>
                        </Flex>
                        <ActionIcon
                            sx={{
                                transform: "scale(0.7)",
                                ":active": {
                                    transform: "scale(0.7) translateY(2px)",
                                },
                            }}
                            variant="pixel"
                            p={5}
                            onClick={(event) =>
                                event.ctrlKey
                                    ? deleteBuilding()
                                    : modals.openConfirmModal({
                                          onConfirm: () => deleteBuilding(),
                                          title: (
                                              <Text>
                                                  Do you really want to delete
                                                  this building ?
                                              </Text>
                                          ),
                                          children: (
                                              <Text c={"dark"} size={12}>
                                                  Quick sell :{" "}
                                                  <Kbd size="xs">ctrl</Kbd> +{" "}
                                                  <Kbd size="xs">click</Kbd>
                                              </Text>
                                          ),
                                          centered: true,
                                          labels: {
                                              confirm: "Yes delete",
                                              cancel: "Cancel",
                                          },
                                          confirmProps: {
                                              color: "red",
                                              variant: "pixel",
                                          },
                                          cancelProps: {
                                              color: "grey",
                                              variant: "pixel",
                                          },
                                      })
                            }
                            color={"red"}
                            size="sm"
                        >
                            <IconTrash />
                        </ActionIcon>
                    </Flex>
                </Flex>
                <Flex gap="xs" wrap={"wrap"}>
                    {building.inputs.length > 0 && (
                        <Card withBorder sx={{ flex: 1 }}>
                            <Text> Inputs </Text>
                            <RessourcesArea
                                size={10}
                                ressources={ressourceItemParser(
                                    building.inputs,
                                    (value) =>
                                        value *
                                        (building.clock > 1
                                            ? (building.clock + 0.2) / 100
                                            : building.clock / 100)
                                )}
                            />
                        </Card>
                    )}
                    {building.outputs.length > 0 && (
                        <Card withBorder>
                            <Text> Outputs </Text>

                            <RessourcesArea
                                size={10}
                                ressources={ressourceItemParser(
                                    building.outputs,
                                    (value) => (value * building.clock) / 100
                                )}
                            />
                        </Card>
                    )}
                    <Flex w={"100%"} direction={"column"}>
                        <Flex w={"100%"} justify={"space-between"}>
                            <Text>{building.upgrades.ecology} ecology</Text>
                            {building.upgrades.ecology +
                                building.upgrades.efficiency &&
                                Math.round(
                                    (building.upgrades.ecology /
                                        (building.upgrades.ecology +
                                            building.upgrades.efficiency)) *
                                        100
                                )}{" "}
                            %
                            <Text>
                                efficiency {building.upgrades.efficiency}
                            </Text>
                        </Flex>
                        <Progress
                            w={"100%"}
                            size={"xs"}
                            radius={"xl"}
                            value={
                                (building.upgrades.ecology /
                                    (building.upgrades.ecology +
                                        building.upgrades.efficiency)) *
                                100
                            }
                            color="teal.5"
                            bg={theme.colors.brown[4]}
                            sx={{
                                ".mantine-Progress-bar": {
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                },
                            }}
                        />
                    </Flex>
                    <Flex
                        w={"100%"}
                        align={"center"}
                        justify={"center"}
                        gap={6}
                    >
                        <IconClockBolt color="yellow" />
                        <Slider
                            sx={{ zIndex: 0 }}
                            w={"100%"}
                            size="sm"
                            showLabelOnHover={true}
                            min={0}
                            max={100 + Math.floor(building.upgrades.efficiency/5) * 5}
                            step={5}
                            defaultValue={building.clock}
                            marks={new Array(6).fill(0).map((_el, id) => {
                                return {
                                    label: `${Math.floor(
                                        ((100 +
                                            Math.floor(building.upgrades.efficiency/5) * 5) /
                                            5) *
                                            id
                                    )} %`,
                                    value: Math.floor(
                                        ((100 +
                                            Math.floor(building.upgrades.efficiency/5) * 5) /
                                            5) *
                                            id
                                    ),
                                };
                            })}
                            onChangeEnd={changeClock}
                        />
                    </Flex>
                </Flex>
                <LoadingOverlay
                    zIndex={0}
                    visible={openned}
                    loaderProps={{ color: info?.theme }}
                />
            </Card>
        ),
        [
            building.inputs,
            building.outputs,
            building.upgrades.ecology,
            building.upgrades.efficiency,
            building.clock,
            openned,
        ]
    );
};

export default Building;
