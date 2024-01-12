import {
    Avatar,
    Button,
    Flex,
    Header as MantineHeader,
    Text,
    Tooltip,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { NavLink } from "react-router-dom";
import {
    useRessourcesContext,
    useUserDataContext,
} from "../../scripts/Context";
import { handleLogout } from "../../scripts/pb/authScripts";
import formater from "../../scripts/utils/formater";
import LoginContainer from "./LoginContainer";
import SignUpContainer from "./SignUpContainer";

const Header = () => {
    const { isValid, id, username } = useUserDataContext();
    const { score } = useRessourcesContext();
    return (
        <MantineHeader sx={{ color: "white" }} height={60} p="xs">
            <Flex
                w={"100%"}
                h={"100%"}
                align={"center"}
                justify={"space-between"}
            >
                <Text color="white" component={NavLink} to={"/"}>
                    Hycoon
                </Text>

                {!isValid ? (
                    <Flex gap={"xs"}>
                        <LoginContainer />
                        <SignUpContainer />
                    </Flex>
                ) : (
                    <Flex
                        direction={"row"}
                        gap={"md"}
                        justify={"center"}
                        align={"center"}
                    >
                        {formater(score)}
                        <Avatar radius="xl" />
                        <Tooltip label={id}>
                            <Text>{username}</Text>
                        </Tooltip>
                        <Button
                            variant="pixel"
                            color={"red"}
                            onClick={() =>
                                modals.openConfirmModal({
                                    onConfirm: handleLogout,
                                    title: <Text> Do you wanna logout ? </Text>,
                                    centered: true,
                                    labels: {
                                        confirm: "Yes logout",
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
                        >
                            Logout
                        </Button>
                    </Flex>
                )}
            </Flex>
        </MantineHeader>
    );
};

export default Header;
