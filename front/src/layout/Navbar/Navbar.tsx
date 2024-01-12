import { Flex, Navbar as MantineNavbar, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import RessourcesArea from "../../pages/Ressources/RessourcesArea";
import {
    useRessourcesContext,
    useRessourcesDataContext,
    useUserDataContext,
} from "../../scripts/Context";
import NavigationLink from "./NavigationLink";

const Navbar = () => {
    const match = useMediaQuery("(min-width: 860px)");
    const { isAdmin, id } = useUserDataContext();
    const { ressources } = useRessourcesContext();
    const { pinned, incomes } = useRessourcesDataContext();
    const links = useMemo(
        () => (
            <Flex mb={"lg"} w={"100%"} wrap={"wrap"} gap={"md"}>
                <NavigationLink to="/Game/Buildings" color="indigo">
                    Buildings
                </NavigationLink>
                <NavigationLink to="/Game/Shop" color="teal">
                    Shop
                </NavigationLink>
                <NavigationLink to="/Game/Map" color="orange">
                    Map
                </NavigationLink>
                {/* <NavigationLink color="purple" to="/Game/Ressources">
                    Ressources
                </NavigationLink>
                <NavigationLink color="orange" to="/Game/Incomes">
                    Incomes
                </NavigationLink> */}
                <NavigationLink color="Indigo" to="/Game/Quests">
                    Quests
                </NavigationLink>
                {isAdmin ? (
                    <NavigationLink to="/Game/AdminPanel" color="red">
                        Admin panel
                    </NavigationLink>
                ) : (
                    <></>
                )}
            </Flex>
        ),
        [isAdmin]
    );
    return (
        <MantineNavbar
            sx={{ color: "white" }}
            width={{ base: match ? 300 : 175 }}
            p="xs"
            pb={0}
        >
            {id && (
                <Flex
                    justify={"space-between"}
                    direction={"column"}
                    gap={"xs"}
                    h={"100%"}
                    w={"100%"}
                >
                    {links}
                    <Flex direction={"column"} gap={"xs"} my={"xs"}>
                        <Text
                            size={"lg"}
                            component={NavLink}
                            to={"/Game/Ressources"}
                        >
                            <Flex gap={4} align={"center"}>
                                Ressources
                                <IconArrowBadgeRightFilled
                                    style={{ marginBottom: 2 }}
                                />
                            </Flex>
                        </Text>
                        <RessourcesArea
                            size={12}
                            ressources={ressources}
                            condition={(info) =>
                                pinned?.includes(info?.name || "")
                            }
                        />
                        <Text
                            size={"lg"}
                            component={NavLink}
                            to={"/Game/Incomes"}
                        >
                            <Flex gap={4} align={"center"}>
                                Incomes
                                <IconArrowBadgeRightFilled
                                    style={{ marginBottom: 2 }}
                                />
                            </Flex>
                        </Text>
                        <RessourcesArea
                            withSign
                            size={12}
                            ressources={incomes}
                            condition={(info) =>
                                pinned.includes(info?.name || "")
                            }
                        />
                    </Flex>
                </Flex>
            )}
        </MantineNavbar>
    );
};

export default Navbar;
