import { Box, useMantineTheme } from "@mantine/core";
import dagre from "dagre";
import ReactFlow, {
    Background,
    Edge,
    MiniMap,
    Node,
    Position,
    useEdgesState,
    useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { questRecord } from "../../scripts/interfaces/quest";
import objectKeys from "../../scripts/utils/objectKeys";
import QuestNode from "./QuestNode";
import { nodeSize, ressourceHeight } from "./variables";

const nodeTypes = {
    QuestNode: QuestNode,
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (
    nodes: Node[],
    edges: Edge[],
    direction: "TB" | "LR" = "TB"
) => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    type nodeType = Omit<Node, "data"> & { data: questRecord };
    nodes.forEach((prevnode) => {
        let node: nodeType = prevnode as nodeType;
        dagreGraph.setNode(node.id, {
            width: nodeSize.width + 100,
            height:
                nodeSize.height +
                objectKeys(node.data.ressourcesNeeded).length * ressourceHeight,
        });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((prevnode) => {
        let node: nodeType = prevnode as nodeType;
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = isHorizontal ? Position.Left : Position.Top;
        node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeSize.width / 2,
            y:
                nodeWithPosition.y -
                nodeSize.height -
                (objectKeys(node.data.ressourcesNeeded).length *
                    ressourceHeight) /
                    2,
        };

        return node;
    });

    return { nodes, edges };
};

const Flow = ({
    initialNodes,
    initialEdges,
}: {
    initialNodes: Node[];
    initialEdges: Edge[];
}) => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        initialNodes,
        initialEdges,
        "LR"
    );
    const [nodes, _, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, _setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    const theme = useMantineTheme();

    return (
        <Box h={"100%"} w={"100%"}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background color={theme.colors.indigo[1]} size={1.5} />
                <MiniMap
                    maskColor={theme.colors.dark[9] + "55"}
                    style={{ backgroundColor: theme.colors.indigo[9] + "FF" }}
                    nodeColor={"#25262b"}
                    zoomable
                    pannable
                />
            </ReactFlow>
        </Box>
    );
};

export default Flow;
