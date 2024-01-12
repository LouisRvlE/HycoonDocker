import { Button, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { handleLogin } from "../scripts/pb/authScripts";

interface LoginContainerProps {
    form: UseFormReturnType<
        {
            identity: {
                username: string;
                email: string;
            };
            password: string;
            passwordConfirm: string;
        },
        (values: {
            identity: {
                username: string;
                email: string;
            };
            password: string;
            passwordConfirm: string;
        }) => {
            identity: {
                username: string;
                email: string;
            };
            password: string;
            passwordConfirm: string;
        }
    >;
    closeModal: () => void;
}

const LoginContainer = ({ form, closeModal }: LoginContainerProps) => {
    return (
        <form
            onSubmit={form.onSubmit((values) => {
                handleLogin(values, closeModal);
            })}
        >
            Login
            <TextInput
                label={"Email"}
                {...form.getInputProps("identity.email")}
            />
            <TextInput
                label={"password"}
                {...form.getInputProps("password")}
                type="password"
            />
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

export default LoginContainer;
