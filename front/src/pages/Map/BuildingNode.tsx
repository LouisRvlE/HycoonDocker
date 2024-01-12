import { Box, Image } from "@mantine/core";
import { modals } from "@mantine/modals";
import { memo, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { NodeProps } from "reactflow";
import { useInfoContext } from "../../scripts/Context";
import { building } from "../../scripts/interfaces/building";
import { infoRecord } from "../../scripts/interfaces/infoRecord";
import { getUrl } from "../../scripts/pb/getUrl";
import BuildingModal from "./BuildingModal";

const BuildingNode = memo(
    ({ data, xPos, yPos }: Omit<NodeProps, "data"> & { data: building }) => {
        const openModal = useCallback(() => {
            modals.closeAll(),
                modals.open({
                    children: <BuildingModal data={data} />,
                    centered: true,
                });
        }, [data]);
        const infos = useInfoContext();
        let info = infos.get(data.type) as infoRecord;
        console.log(data);
        return (
            <>
                {" "}
                {data.category === "other" ? (
                    <>
                        <Box
                            id={data.id}
                            w={"192px"}
                            h={"192px"}
                            sx={{ zIndex: yPos }}
                            // bg={dragging ? "red" : "dark"}
                            data-x={xPos}
                            data-y={yPos}
                            component={NavLink}
                            to={data.navlink}
                            // p={1}
                        >
                            <Image
                                sx={{ imageRendering: "pixelated" }}
                                src={getUrl(info, info?.icon) || ""}
                            />
                        </Box>
                    </>
                ) : (
                    <Box
                        id={data.id}
                        w={"192px"}
                        h={"192px"}
                        sx={{ zIndex: yPos }}
                        // bg={dragging ? "red" : "dark"}
                        data-x={xPos}
                        data-y={yPos}
                        onClick={openModal}
                        // p={1}
                    >
                        <Image
                            sx={{ imageRendering: "pixelated" }}
                            src={getUrl(info, info?.icon) || ""}
                        />
                    </Box>
                )}
            </>
        );
    }
);

export default BuildingNode;
