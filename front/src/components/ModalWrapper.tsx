import { Modal } from "@mantine/core";
import React from "react";

export interface ModalWrapperProps {
    close: () => void;
    opened: boolean;
}

const ModalWrapper = ({
    close,
    opened,
    children,
    title,
}: ModalWrapperProps & { children: React.ReactNode; title: string }) => {
    return (
        <Modal
            size={"xl"}
            title={title}
            centered
            opened={opened}
            onClose={close}
        >
            {children}
        </Modal>
    );
};

export default ModalWrapper;
