import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModalWrapper from "../../components/ModalWrapper";
import LoginForm from "./LoginForm";
import LoginFormG from "./LoginFormG";
import LoginFormL from "./LoginFormL";

const LoginContainer = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Button variant="pixel" onClick={open}>
                {" "}
                Login{" "}
            </Button>
            <ModalWrapper opened={opened} close={close} title="Login">
                <LoginForm closeModal={close} />
                <LoginFormG closeModal={close} />
                <LoginFormL closeModal={close} />
            </ModalWrapper>
        </>
    );
};

export default LoginContainer;
