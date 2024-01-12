import { Button, Flex, JsonInput, Title } from "@mantine/core";
import { RecordSubscription } from "pocketbase";
import { useEffect, useState } from "react";
import AddRessources from "../../components/AddRessources";
import SetRessources from "../../components/SetRessources";
import { infoRecord } from "../../scripts/interfaces/infoRecord";
import { collections } from "../../scripts/pb/collections";
import { socket } from "../../scripts/globalVariables";
import { ressourceType } from "../../scripts/interfaces/ressourceType";
import pb from "../../scripts/pb/pb";
import { useUserDataContext } from "../../scripts/Context";

const EndPointTester = () => {
    const [data, setData] = useState<infoRecord[]>([]);
    const { id } = useUserDataContext();
    const [json, setJson] = useState<string>("{}");
    const funcs = [
        {
            func: () => {
                socket.emit("updateID", id);
            },
            label: "updateID",
        },
        {
            func: () => {
                socket.emit("addBuilding", JSON.parse(json));
            },
            label: "addBuilding",
        },
        {
            func: () => {
                socket.emit("upgBuilding", JSON.parse(json));
            },
            label: "upgBuilding",
        },
        {
            func: () => {
                socket.emit("delBuilding", JSON.parse(json));
            },
            label: "delBuilding",
        },
        {
            func: () => {
                socket.emit("log");
            },
            label: "log",
        },
        {
            func: () => {
                socket.emit("clearRessources");
            },
            label: "clearRessources",
        },
    ];
    useEffect(() => {
        let unsub: any;
        (async () => {
            let res: infoRecord[] = await pb
                .collection(collections.infos)
                .getFullList({ filter: 'type="ressource"' });
            setData(res);
            unsub = await pb
                .collection(collections.infos)
                .subscribe("*", (e: RecordSubscription<infoRecord>) => {
                    if (e.record.type !== "ressource") return;
                    setData((old) =>
                        [...old].map((el) => {
                            if (el.id === e.record.id) {
                                return e.record;
                            }
                            return el;
                        })
                    );
                });
        })();
        return unsub;
    }, []);
    return (
        <>
            <Flex gap={"lg"} wrap={"wrap"}>
                <Flex
                    miw={"600px"}
                    sx={{ flex: 1 }}
                    gap={"md"}
                    direction={"column"}
                >
                    <Title>Test endPoints</Title>
                    <JsonInput
                        placeholder="{ }"
                        label="Send to back ->"
                        formatOnBlur
                        w={"100%"}
                        minRows={8}
                        autosize
                        onChange={setJson}
                        value={json}
                    />
                    <Flex gap={"xs"} wrap={"wrap"}>
                        {funcs.map(({ func, label }, key) => (
                            <Button
                                size="xl"
                                variant="pixel"
                                key={key}
                                onClick={func}
                            >
                                {label}
                            </Button>
                        ))}
                    </Flex>
                </Flex>

                <Flex
                    miw={"600px"}
                    sx={{ flex: 1 }}
                    gap={8}
                    direction={"column"}
                >
                    <Title>Give ressources</Title>
                    {data.map((el, id) => (
                        <AddRessources
                            ressources={el.name as ressourceType}
                            key={id}
                        />
                    ))}
                </Flex>
                <Flex
                    miw={"600px"}
                    sx={{ flex: 1 }}
                    gap={8}
                    direction={"column"}
                >
                    <Title>Set ressources</Title>
                    {data.map((el, id) => (
                        <SetRessources
                            propsRessources={el.name as ressourceType}
                            key={id}
                        />
                    ))}
                </Flex>
            </Flex>
        </>
    );
};

export default EndPointTester;
