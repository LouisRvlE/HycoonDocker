import { Box, Button, Flex, NumberInput, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRessourcesContext } from "../scripts/Context";
import { socket } from "../scripts/globalVariables";
import { ressourceType } from "../scripts/interfaces/ressourceType";

const onSubmit = (ressource: ressourceType, amount: number | "") => {
    socket.emit("setRessources", {
        ressource,
        // amount: amount === "" ? 0 : amount,
        amount: typeof amount === "string" ? 0 : amount,
    });
};

const SetRessources = ({
    propsRessources: propsRessources,
}: {
    propsRessources: ressourceType;
}) => {
    const { ressources } = useRessourcesContext();
    let defaultValue =
        typeof ressources[propsRessources] !== "number"
            ? 0
            : ressources[propsRessources];
    const form = useForm<{ amount: number }>({
        initialValues: {
            amount: defaultValue as number,
        },
    });
    return (
        <>
            <Box
                w={"100%"}
                component="form"
                onSubmit={form.onSubmit((values) => {
                    onSubmit(propsRessources, values.amount);
                })}
            >
                <Flex gap={8} align={"center"}>
                    <Text sx={{ flex: 1 }}>{propsRessources}</Text>
                    <NumberInput
                        type="number"
                        sx={{ flex: 2 }}
                        {...form.getInputProps("amount")}
                    />
                    <Button variant="pixel" type="submit">
                        +
                    </Button>
                </Flex>
            </Box>
        </>
    );
};

export default SetRessources;
