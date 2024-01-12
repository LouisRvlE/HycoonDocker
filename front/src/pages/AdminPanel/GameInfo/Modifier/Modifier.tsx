import { Box, Button, Select } from "@mantine/core";
import { RecordSubscription } from "pocketbase";
import { useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { infoRecord } from "../../../../scripts/interfaces/infoRecord";
import { collections } from "../../../../scripts/pb/collections";
import pb from "../../../../scripts/pb/pb";
import { parseName } from "../../../../scripts/utils/parseName";
import Form from "./Form";

const Modifier = () => {
    const [data, setData] = useState<infoRecord[]>([]);
    const [selectedElement, setSelectedElement] = useState<string | null>(null);
    const { defaultvalue } = useParams();
    useEffect(() => {
        let unsub: any;
        (async () => {
            let res: infoRecord[] = await pb
                .collection(collections.infos)
                .getFullList();
            setData(res);
            unsub = await pb
                .collection(collections.infos)
                .subscribe("*", (e: RecordSubscription<infoRecord>) => {
                    if (e.action === "create") {
                        return setData((old) => [...old, e.record]);
                    } else if (e.action === "update") {
                        return setData((old) =>
                            [...old].map((el) => {
                                if (el.id === e.record.id) {
                                    return e.record;
                                }
                                return el;
                            })
                        );
                    }
                });
        })();
        return unsub;
    }, []);

    const selectedItem = data.find((el) => el.id === selectedElement);

    useEffect(() => {
        defaultvalue && setSelectedElement(defaultvalue);
    }, [defaultvalue]);

    return (
        <Box sx={{ color: "white" }}>
            <Button
                component={NavLink}
                variant="pixel"
                color="red"
                to="/Game/AdminPanel/GameInfo"
                mb={"xs"}
            >
                Go back
            </Button>
            <Select
                data={data.map((el, _id) => ({
                    label: parseName(el.name),
                    value: el.id,
                    group: el.type,
                }))}
                defaultValue={defaultvalue}
                onChange={setSelectedElement}
                value={selectedElement}
                label="Select an element :"
                withAsterisk
                clearable
                searchable
                creatable
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => {
                    const item = { value: query, label: query };
                    const create = async () => {
                        const result = await pb
                            .collection(collections.infos)
                            .create({
                                label: query,
                                name: query.toLowerCase().split(" ").join("_"),
                                info: {
                                    cost: {},
                                    inputs: [],
                                    outputs: [],
                                },
                                theme: "blue",
                                type: "building",
                                defaultPosition: { x: 0, y: 0 },
                                // icon: defaultIcon,
                            });
                        setSelectedElement(result.id);
                    };
                    create();
                    return item;
                }}
            />
            {useMemo(
                () =>
                    selectedElement && (
                        <>
                            <Form selected={selectedItem} />
                        </>
                    ),
                [selectedItem]
            )}
        </Box>
    );
};

export default Modifier;
