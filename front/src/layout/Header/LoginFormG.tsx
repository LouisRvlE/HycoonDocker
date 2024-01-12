import { Button, Flex, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { handleLogin } from "../../scripts/pb/authScripts";

const LoginFormG = ({closeModal}:{closeModal: () => void}) => {
    const form = useForm({
        initialValues: {
            identity: { email: "gm@g.m" },
            password: "123456789",
        },
    });
    return (
        <form
            onSubmit={form.onSubmit((values) => {
                handleLogin(values, closeModal);
            })}
        >
            <Flex gap={"xs"}>
                <TextInput
                    sx={{ flex: 1 }}
                    label={"Email"}
                    {...form.getInputProps("identity.email")}
                />
                <TextInput
                    sx={{ flex: 1 }}
                    label={"Mot de passe"}
                    {...form.getInputProps("password")}
                    type="password"
                />
            </Flex>
            <Button
                disabled={!(form.values.identity.email && form.values.password)}
                mt={8}
                type="submit"
            >
                Log in
            </Button>
        </form>
    );
};

export default LoginFormG;
