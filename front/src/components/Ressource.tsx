import { Card, Flex, Image, Text } from "@mantine/core";
import { IconInfinity } from "@tabler/icons-react";
import React from "react";
import { infoRecord } from "../scripts/interfaces/infoRecord";
import { getUrl } from "../scripts/pb/getUrl";
import formater from "../scripts/utils/formater";
import { parseName } from "../scripts/utils/parseName";

const Ressource = ({
    size = 16,
    info,
    width = "auto",
    parsing = true,
    value = 0,
    Wrapper = ({ children }: { children: React.ReactNode }) => (
        <> {children} </>
    ),
}: {
    size?: number;
    info?: infoRecord;
    tooltip?: boolean;
    displayText?: React.ReactNode;
    width?: string;
    Wrapper?: React.FC<{
        children: React.ReactNode;
    }>;
    value?: number;
    parsing?: boolean;
}) => {
    return info ? (
        <Flex w={width} align={"center"} gap={"xs"}>
            <Card bg={"transparent"} p={3} shadow="lg">
                {info && (
                    <Image
                        sx={{ imageRendering: "pixelated" }}
                        // width={size * 2}
                        height={size * 2.5}
                        fit="contain"
                        src={getUrl(info, info?.icon)}
                    />
                )}
            </Card>
            <Flex w={"100%"} direction={"column"}>
                <Text
                    sx={{ whiteSpace: "nowrap" }}
                    w={"fit-content"}
                    // color="white"
                    weight={"bold"}
                    size={size * 1.1}
                >
                    {parseName(info?.name)}
                </Text>
                <Text size={size}>
                    <Wrapper>
                        {parsing ? (
                            value > 1 * 10 ** 24 ? (
                                <IconInfinity size={16} />
                            ) : (
                                formater(value)
                            )
                        ) : (
                            value
                        )}
                    </Wrapper>
                </Text>
            </Flex>
        </Flex>
    ) : (
        <></>
    );
};

export default Ressource;
