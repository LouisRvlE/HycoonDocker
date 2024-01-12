import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModalWrapper from "../../components/ModalWrapper";
import SignUpForm from "./SignUpForm";

const SignUpContainer = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Button variant="pixel" onClick={open}>
                SignUp
            </Button>
            <ModalWrapper opened={opened} close={close} title="Créer un compte">
                <SignUpForm closeModal={close} />
            </ModalWrapper>
        </>
    );
};

export default SignUpContainer;
