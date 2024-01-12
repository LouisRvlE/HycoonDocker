import { Avatar, Flex } from "@mantine/core";
import { buildingType } from "../../scripts/interfaces/buildingType";
import { parseName } from "../../scripts/utils/parseName";

const Building = ({ buildingKey }: { buildingKey: buildingType }) => {
    return (
        <Flex align={"center"} gap={4} sx={{flex:1}}>
            <Avatar></Avatar>
            {parseName(buildingKey)}
        </Flex>
    );
};

export default Building;
