import { MantineColor } from "@mantine/core";

export type upgradeType = "ecology" | "efficiency";

export type upgradeFunc = (upgradeType: upgradeType) => void;

export interface upgradeProps {
    upgradeType: upgradeType;
    icon: React.ReactNode;
    color: MantineColor;
}
