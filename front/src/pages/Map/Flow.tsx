import { Box, useMantineTheme } from "@mantine/core";
import { MiniMap, Node, ReactFlow, useNodesState } from "reactflow";
import { building } from "../../scripts/interfaces/building";
import { collections } from "../../scripts/pb/collections";
import pb from "../../scripts/pb/pb";
import { useAuthStore } from "../../scripts/pb/useAuthStore";
import useSubscribe from "../../scripts/pb/useSubscribe";
import BuildingNode from "./BuildingNode";
import { useEffect, useRef } from "react";
import Background from "./Background";

const nodeTypes = {
    BuildingNode: BuildingNode,
};

const Flow = (
    // { initialNodes }: { initialNodes?: Node[] }
    ) => {
    const authStore = useAuthStore();
    const theme = useMantineTheme();
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const { records } = useSubscribe<building, Node>(
        "buildings",
        (obj) => {
            return {
                id: obj.id,
                type: "BuildingNode",
                data: obj,
                position: {
                    x: obj?.position?.x || 0,
                    y: obj?.position?.y || 0,
                },
            };
        },
        undefined,
        `uID="${authStore.auth.model?.id}"`
    );

    useEffect(() => {
        setNodes(records);
    }, [records]);

    const basePosition = useRef({ x: 0, y: 0 });

    return (
        <Box h={"100%"} w={"100%"}>
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                snapGrid={[192, 192]}
                snapToGrid={true}
                onlyRenderVisibleElements={true}
                onNodeDragStart={(_e, node) => {
                    basePosition.current = node.position;
                }}
                onNodeDragStop={async (_e, node) => {
                    let sameNode = nodes.find((el) => {
                        return (
                            el.position.x === node.position.x &&
                            el.position.y === node.position.y &&
                            el.id !== node.id
                        );
                    });
                    if (sameNode) {
                        return onNodesChange([
                            {
                                type: "position",
                                id: node.id,
                                position: basePosition.current,
                            },
                        ]);
                    }
                    pb.collection(collections.buildings).update(node.id, {
                        position: node.position,
                    });
                }}
            >
                <Background gap={48} color={theme.colors.indigo[1]} size={1} />
                <MiniMap
                    maskColor={theme.colors.dark[9] + "55"}
                    style={{
                        backgroundColor: theme.colors.indigo[9] + "aa",
                        width: 156,
                        height: 128,
                    }}
                    nodeColor={"#25262b"}
                    zoomable
                    pannable
                />
            </ReactFlow>
        </Box>
    );
};

export default Flow;
