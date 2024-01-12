import useSubscribe from "../../scripts/pb/useSubscribe";
import Flow from "./Flow";
import { Edge, MarkerType, Node } from "reactflow";
import { useState } from "react";
import { Box } from "@mantine/core";
import { questRecord } from "../../scripts/interfaces/quest";
import { useQuestContext } from "../../scripts/Context";

const Quests = () => {
    // gettings nodes, and when its good me show the flow

    const [edges, setEdges] = useState<Edge[]>([]);
    const { unlockedQuests } = useQuestContext();

    const { records, loading } = useSubscribe<questRecord, Node>(
        "quests",
        (obj) => {
            let toAddEdges: Edge[] = [];
            // unlockedQuests.includes(obj.id);
            obj.questsOnSuccess.forEach((el) =>
                toAddEdges.push({
                    id: obj.id + el,
                    source: obj.id,
                    target: el,
                    animated: !unlockedQuests.includes(el),
                    type: "smoothstep",
                    style: { width: "50px" },
                    markerEnd: {
                        type: MarkerType.Arrow,
                        width: 24,
                        height: 24,
                        strokeWidth: 1.5,
                    },
                })
            );

            setEdges((old) => [...old, ...toAddEdges]);

            return {
                id: obj.id,
                type: "QuestNode",
                data: obj,
                draggable: false,
                position: { x: 50, y: 50 },
            };
        }
    );
    return (
        <Box
            h={"calc(100% + 2rem + var(--mantine-aside-width, 0px))"}
            w={"calc(100% + 2rem + var(--mantine-aside-width, 0px))"}
            m={"calc(0px - 1rem - var(--mantine-aside-width, 0px))"}
        >
            {!loading && <Flow initialNodes={records} initialEdges={edges} />}
        </Box>
    );
};

export default Quests;
