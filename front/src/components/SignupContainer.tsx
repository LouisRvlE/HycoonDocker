import { Button, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { handleSignin } from "../scripts/pb/authScripts";

interface SignupContainerProps {
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

const SignupContainer = ({ form, closeModal }: SignupContainerProps) => {
    return (
        <form
            onSubmit={form.onSubmit((values) => {
                handleSignin(values, closeModal);
            })}
        >
            Signin
            <TextInput
                label={"Email"}
                {...form.getInputProps("identity.email")}
            />
            <TextInput
                label={"Username"}
                {...form.getInputProps("identity.username")}
            />
            <TextInput
                label={"password"}
                {...form.getInputProps("password")}
                type="password"
            />
            <TextInput
                label={"Confirm password"}
                {...form.getInputProps("passwordConfirm")}
                type="password"
            />
            <Button
                disabled={
                    !(
                        form.values.identity.email &&
                        form.values.identity.username &&
                        form.values.password &&
                        form.values.passwordConfirm
                    )
                }
                mt={8}
                type="submit"
            >
                Sign in
            </Button>
        </form>
    );
};

export default SignupContainer;
