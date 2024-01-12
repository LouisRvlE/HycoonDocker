import { Card, Image, Text, Button, Group } from "@mantine/core";
import { pb } from "../scripts/pb/pb";
import { socket } from "../scripts/globalVariables";

interface Cartes {
    image?: string;
    alt?: string;
    title: string;
    text: string;
    id: string;
    collection: string;
    dataList: () => void;
}

const CartesData = (props: Cartes) => {
    const deleteData = async () => {
        await pb.collection(props.collection).delete(props.id);
        props.dataList();
    };
    const levelUpBuilding = () => {
        socket.emit("levelUpBuilding", props.id);
        props.dataList();
    };
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image src={props?.image} height={160} alt={props?.alt} />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{props.title}</Text>
            </Group>

            <Text size="sm" color="dimmed">
                {props.text}
            </Text>

            <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => deleteData()}
            >
                Delete
            </Button>
            <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => levelUpBuilding()}
            >
                Update
            </Button>
        </Card>
    );
};

export default CartesData;
