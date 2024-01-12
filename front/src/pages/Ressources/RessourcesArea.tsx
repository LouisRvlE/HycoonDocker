import React, { useMemo } from "react";

import { Box, Flex, Text } from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";
import Ressource from "../../components/Ressource";
import { useInfoContext } from "../../scripts/Context";
import { infoRecord } from "../../scripts/interfaces/infoRecord";
import { ressource } from "../../scripts/interfaces/ressource";
import objectKeys from "../../scripts/utils/objectKeys";

const RessourcesArea = ({
    size = 16,
    ressources,
    withSign,
    condition = () => true,
    Wrapper = ({ children, sign }) => (
        <Flex align={"center"}>
            {withSign && sign}
            {children}
        </Flex>
    ),
    valueParser = (v) => v,
}: {
    size?: number;
    ressources?: Partial<ressource>;
    withSign?: boolean;
    condition?: (info?: infoRecord) => boolean;
    Wrapper?: React.FC<{
        children: React.ReactNode;
        sign?: React.ReactNode;
        name?: string;
    }>;
    valueParser?: (value: number) => number;
}) => {
    const infos = useInfoContext();

    let ress = ressources
        ? objectKeys(ressources).filter((key) => condition(infos.get(key)))
        : [];

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: `repeat(auto-fit, minmax(${
                    size * 10
                }px, max-content))`,
                gap: `${size}px`,
                flex: 1,
            }}
        >
            {useMemo(
                () =>
                    ress.length > 0 && ressources ? (
                        ress.map((key) => {
                            const info = infos.get(key);
                            if (!condition(info))
                                return <React.Fragment key={key} />;
                            const value = ressources[key] as number;
                            const sign =
                                value < 0 ? (
                                    <IconArrowDownRight color="red" />
                                ) : (
                                    <IconArrowUpRight color="green" />
                                );
                            return (
                                <Ressource
                                    Wrapper={({ children }) => (
                                        <Wrapper sign={sign} name={key}>
                                            {children}
                                        </Wrapper>
                                    )}
                                    value={valueParser(value)}
                                    info={info}
                                    size={size}
                                    key={key}
                                />
                            );
                        })
                    ) : (
                        <Text size={12} c={"grey"}>
                            No one here
                        </Text>
                    ),
                [ressources, infos, valueParser]
            )}
        </Box>
    );
};

export default RessourcesArea;
