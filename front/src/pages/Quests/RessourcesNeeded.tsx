import { Box, Progress } from "@mantine/core";
import { memo } from "react";
import { useInfoContext } from "../../scripts/Context";
import { ressourceType } from "../../scripts/interfaces/ressourceType";
import { parseName } from "../../scripts/utils/parseName";

const RessourcesNeeded = memo(
    ({
        quantity,
        ressource,
        actualQuantity,
        isEnded,
    }: {
        quantity: number;
        ressource: ressourceType;
        actualQuantity: number;
        isEnded: boolean;
    }) => {
        const infos = useInfoContext();

        const info = infos.get(ressource);
        return (
            <Box>
                Collect {quantity} {parseName(ressource)}
                <Progress
                    animate={!isEnded}
                    color={info?.theme}
                    value={isEnded ? 100 : (actualQuantity / quantity) * 100}
                />
            </Box>
        );
    },
    (old, actual) => old.actualQuantity === actual.actualQuantity
);

export default RessourcesNeeded;
