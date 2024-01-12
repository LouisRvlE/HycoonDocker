import { Box } from "@mantine/core";
import Flow from "./Flow";

const Map = () => {
    return (
        <Box
            sx={
                {
                    // background: "repeat url('/tile.png')",
                }
            }
            h={"calc(100% + 2rem + var(--mantine-aside-width, 0px))"}
            w={"calc(100% + 2rem + var(--mantine-aside-width, 0px))"}
            m={"calc(0px - 1rem - var(--mantine-aside-width, 0px))"}
        >
            {<Flow />}
        </Box>
    );
};

export default Map;
