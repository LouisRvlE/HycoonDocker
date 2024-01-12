import {
    Button,
    Code,
    FileInput,
    Flex,
    Image,
    NumberInput,
    Select,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import Demo from "./Demo";
import { infoRecord } from "../../../../scripts/interfaces/infoRecord";
import { formReturnType } from "../../../../scripts/interfaces/formProps";
import objectKeys from "../../../../scripts/utils/objectKeys";
import { ressourceType } from "../../../../scripts/interfaces/ressourceType";
import pb from "../../../../scripts/pb/pb";
import { collections } from "../../../../scripts/pb/collections";
import { getUrl } from "../../../../scripts/pb/getUrl";
import defaultIcon from "../../../../assets/defaultIcon.jpeg"

const Form = ({ selected }: { selected?: infoRecord }) => {
    const form = useForm<formReturnType>({
        initialValues: {
            id: "",
            label: "",
            name: "",
            info: { cost: [], inputs: [], outputs: [] },
            icon: defaultIcon,
            theme: "",
            type: "",
            category: "",
            score: 0,
            multiplier: 0,
            defaultPosition: { x: 0, y: 0 },
            navlink: "/",
        },
    });

    useEffect(() => {
        form.setValues({
            ...selected,
            info: {
                cost: selected?.info?.cost
                    ? objectKeys(selected.info.cost).map((el) => ({
                          ressource: el,
                          value: selected.info.cost[el],
                      }))
                    : [],
                inputs: selected?.info?.inputs || [],
                outputs: selected?.info?.outputs || [],
            },
        });
    }, [selected]);

    return (
        <form
            onSubmit={form.onSubmit(async (values) => {
                const info = {
                    inputs: values.info.inputs,
                    outputs: values.info.outputs,
                    cost: {} as Record<ressourceType, number>,
                };
                values.info.cost.forEach(
                    (el) => (info.cost[el.ressource] = el.value)
                );
                selected?.id &&
                    (await pb
                        .collection(collections.infos)
                        .update(selected.id, { ...values, info, defaultPosition: { x: values.defaultPosition.x*192, y: values.defaultPosition.y*192 } }));
            })}
        >
            {selected ? (
                <Flex direction={"column"} gap={8}>
                    <Flex gap={"xs"}>
                        <TextInput
                            sx={{ flex: 1 }}
                            disabled
                            {...form.getInputProps("name")}
                            label={"name"}
                        />
                        <TextInput
                            sx={{ flex: 1 }}
                            label={"id"}
                            disabled
                            {...form.getInputProps("id")}
                        />
                    </Flex>
                    <Flex gap={"xs"}>
                        <TextInput
                            sx={{ flex: 1 }}
                            label={"Label"}
                            {...form.getInputProps("label")}
                        />

                        <Flex align={"center"} gap={"xs"} sx={{ flex: 1 }}>
                            {selected.icon ? (
                                <Image
                                    width={64}
                                    src={getUrl(selected, selected.icon)}
                                    sx={{ imageRendering: "pixelated" }}
                                />
                            ) : (
                                <></>
                            )}
                            <FileInput sx={{ flex: 1 }} label={"icon"} />
                        </Flex>
                    </Flex>
                    <Flex gap={"xs"}>
                        <TextInput
                            sx={{ flex: 1 }}
                            {...form.getInputProps("theme")}
                            label={"Theme"}
                        />
                        <Select
                            sx={{ flex: 1 }}
                            label={"Type"}
                            data={[
                                { value: "ressource", label: "Ressource" },
                                { value: "building", label: "Building" },
                                { value: "standalone", label: "Standalone" },
                            ]}
                            {...form.getInputProps("type")}
                        />
                        {form.values.type !== "ressource" ? (
                            <Select
                                sx={{ flex: 1 }}
                                label={"Category"}
                                data={[
                                    { value: "mine", label: "Mine" },
                                    { value: "factory", label: "Factory" },
                                    { value: "home", label: "Home" },
                                    { value: "other", label: "Others" },
                                ]}
                                {...form.getInputProps("category")}
                            />
                        ) : (
                            <></>
                        )}
                    </Flex>
                    {form.values.type === "standalone" ? (
                        <>
                            <Flex w={"100%"} gap={4}>
                                <NumberInput
                                    label="x tile (*192)"
                                    step={1}
                                    {...form.getInputProps("defaultPosition.x")}
                                    sx={{ flex: 1 }}
                                />
                                <NumberInput
                                    label="y tile (*192)"
                                    step={1}
                                    {...form.getInputProps("defaultPosition.y")}
                                    sx={{ flex: 1 }}
                                />
                                <TextInput
                                    label={"navlink"}
                                    {...form.getInputProps("navlink")}
                                    sx={{ flex: 1 }}
                                />
                            </Flex>
                        </>
                    ) : (
                        <></>
                    )}
                    <Flex gap={"xs"}>
                        <NumberInput
                            sx={{ flex: 1 }}
                            precision={3}
                            step={0.1}
                            label={"Multiplier"}
                            {...form.getInputProps("multiplier")}
                        />
                        <NumberInput
                            precision={3}
                            step={0.1}
                            sx={{ flex: 1 }}
                            label={"Score"}
                            {...form.getInputProps("score")}
                        />
                    </Flex>
                    {form.values.type !== "ressource" ? (
                        <Flex gap={"xs"} wrap={"wrap"}>
                            <Demo label="inputs" form={form} color="orange" />
                            <Demo label="outputs" form={form} color="blue" />
                            <Demo label="cost" form={form} />
                        </Flex>
                    ) : (
                        <></>
                    )}

                    <Button variant="pixel" mx={"auto"} type="submit">
                        Envoyer {"->"}
                    </Button>
                    <Text size="sm" weight={500} mt="md">
                        Form values:
                    </Text>
                    <Code block>{JSON.stringify(form.values, null, 2)}</Code>
                </Flex>
            ) : (
                <></>
            )}
        </form>
    );
};

export default Form;
