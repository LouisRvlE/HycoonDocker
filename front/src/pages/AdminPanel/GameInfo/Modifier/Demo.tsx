import {
    ActionIcon,
    Button,
    Card,
    Flex,
    Group,
    Image,
    NumberInput,
    Select,
    SelectItem,
    Text,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { IconTrash } from "@tabler/icons-react";
import { useInfoContext } from "../../../../scripts/Context";
import { formReturnType } from "../../../../scripts/interfaces/formProps";
import { parseName } from "../../../../scripts/utils/parseName";
import { getUrl } from "../../../../scripts/pb/getUrl";

const Demo = ({
    label,
    form,
    color,
}: {
    label: "inputs" | "outputs" | "cost";
    form: UseFormReturnType<formReturnType>;
    color?: string;
}) => {
    const infos = useInfoContext();
    let ressourcesChoice: SelectItem[] = [];

    for (let [key, value] of infos.entries()) {
        if (value.type === "ressource")
            ressourcesChoice.push({ label: parseName(key), value: key });
    }

    const fields = form.values.info[label].map((item, index) => (
        <Flex key={index} mt="xs" align={"center"} gap={"xs"}>
            {/* <Text>{parseName(infos.get(item.ressource)?.label)}</Text> */}
            <Flex gap={"lg"} align={"center"} direction={"column"}>
                <Image
                    sx={{ imageRendering: "pixelated" }}
                    height={24}
                    width={24}
                    src={getUrl(
                        infos.get(item.ressource),
                        infos.get(item.ressource)?.icon
                    )}
                />
                <ActionIcon
                    // mb={20}
                    color="red"
                    variant="pixel"
                    onClick={() => form.removeListItem(`info.${label}`, index)}
                >
                    <IconTrash size="1rem" />
                </ActionIcon>
            </Flex>
            <Flex gap={"xs"} sx={{ flex: 1 }} direction={"column"}>
                <Select
                    withinPortal
                    data={ressourcesChoice}
                    {...form.getInputProps(`info.${label}.${index}.ressource`)}
                    sx={{ flex: 1 }}
                />
                <NumberInput
                    {...form.getInputProps(`info.${label}.${index}.value`)}
                    sx={{ flex: 1 }}
                />
            </Flex>
        </Flex>
    ));

    return (
        <Card withBorder sx={{ flex: 1 }} miw={"200px"} w={"100%"} mx="auto">
            <Text color={color}>{parseName(label)}</Text>
            {fields.length > 0 ? (
                <Group mb="xs"></Group>
            ) : (
                <Text color="dimmed" align="center">
                    No {label}
                </Text>
            )}

            {fields}

            <Group position="center" mt="md">
                <Button
                    variant="pixel"
                    color="teal"
                    onClick={() =>
                        form.insertListItem(`info.${label}`, {
                            ressource: ressourcesChoice[0].value,
                            value: 0,
                            // key: randomId(),
                        })
                    }
                >
                    Add {label}
                </Button>
            </Group>
        </Card>
    );
};

export default Demo;
