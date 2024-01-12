import { Box, Button, Flex, NumberInput, Text } from "@mantine/core";
import { ressourceType } from "../scripts/interfaces/ressourceType";
import { useForm } from "@mantine/form";
import { socket } from "../scripts/globalVariables";

const onSubmit = (ressource: ressourceType, amount: number) => {
    socket.emit("giveRessources", {
        ressource,
        amount: typeof amount === "string" ? 0 : amount,
    });
};

const AddRessources = ({ ressources }: { ressources: ressourceType }) => {
    const form = useForm({
        initialValues: {
            amount: 0,
        },
    });
    return (
        <Box
            w={"100%"}
            component="form"
            onSubmit={form.onSubmit((values) => {
                onSubmit(ressources, values.amount);
            })}
        >
            <Flex gap={8} align={"center"}>
                <Text sx={{ flex: 1 }}>{ressources}</Text>
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
    );
};

export default AddRessources;
