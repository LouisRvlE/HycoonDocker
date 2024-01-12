import { Box, Flex, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import objectKeys from "../../scripts/utils/objectKeys";

let links = {
    "/Game/AdminPanel/EndpointTester": "Endpoint Tester",
    "/Game/AdminPanel/GameInfo": "GameInfo",
    "https://louisrvl.fr/pocketbase/_/#/collections?collectionId=kc6ufpwwdrs7v37&filter=&sort=-created":
        "Pocketbase",
};

const AdminPanel = () => {
    return (
        <>
            <Flex h={"100%"} wrap={"wrap"}>
                {objectKeys(links).map((key) => (
                    <Box
                        key={key}
                        p={"xs"}
                        sx={(theme) => ({
                            flex: 1,
                            textDecoration: "none",
                            ":hover": {
                                backgroundColor: `${theme.colors.indigo[3]}40`,
                            },
                            borderRadius: "15px",
                        })}
                        miw={"500px"}
                        component={NavLink}
                        to={`${key}`}
                    >
                        <Flex
                            w={"100%"}
                            h={"100%"}
                            align={"center"}
                            justify={"center"}
                        >
                            <Text align="center" color="white" size={64}>
                                {links[key]}
                            </Text>
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </>
    );
};

export default AdminPanel;
