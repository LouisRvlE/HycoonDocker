import {
    ActionIcon,
    Flex,
    Kbd,
    Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import Ressource from "../../components/Ressource";
import { useInfoContext } from "../../scripts/Context";
import f from "../../scripts/f";
import {
    upgradeFunc,
    upgradeProps,
    upgradeType,
} from "../../scripts/interfaces/upgrade";
import { parseName } from "../../scripts/utils/parseName";

const Upgarde = ({
    upgradeType,
    upgrade,
    color,
    actualLevel,
    icon,
}: upgradeProps & {
    upgrade: upgradeFunc;
    actualLevel: Record<upgradeType, number>;
}) => {
    const [_opened, {close}] = useDisclosure();
    const onUpgrade = () => {
        close();
        upgrade(upgradeType);
    };
    const info = useInfoContext();

    const openModal = () =>
        modals.openConfirmModal({
            onConfirm: () => upgrade(upgradeType),
            title: <Text>Upgrading by {parseName(upgradeType)} </Text>,
            centered: true,
            children: (
                <>
                    <Text c={"dark"} size={12} mb={"xs"}>
                        Quick buy : <Kbd size="xs">shift</Kbd> +{" "}
                        <Kbd size="xs">click</Kbd>
                    </Text>
                    <Flex direction={"column"} gap={"xs"}>
                        <Ressource
                            value={f(actualLevel[upgradeType] + 1) + 200}
                            size={16}
                            info={info.get(
                                upgradeType === "ecology" ? "biopoly" : "petrol"
                            )}
                        />
                        <Ressource
                            value={f(actualLevel[upgradeType] + 1) + 200}
                            size={16}
                            info={info.get("electronic")}
                        />
                    </Flex>
                </>
            ),
            labels: {
                confirm: "Yes please",
                cancel: "Cancel",
            },
            confirmProps: {
                color: "red",
                variant: "pixel",
            },
            cancelProps: {
                color: "grey",
                variant: "pixel",
            },
        });

    return (
        <>
            <ActionIcon
                sx={{
                    transform: "scale(0.7)",
                    ":active": {
                        transform: "scale(0.7) translateY(2px)",
                    },
                }}
                variant="pixel"
                p={5}
                // onClick={open}
                color={color}
                size="sm"
                onClick={(event) =>
                    event.shiftKey ? onUpgrade() : openModal()
                }
            >
                {icon}
            </ActionIcon>
            {/* </Tooltip> */}
        </>
    );
};

export default Upgarde;
