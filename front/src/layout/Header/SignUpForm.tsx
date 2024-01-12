import { Button, Flex, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { handleSignin } from "../../scripts/pb/authScripts";

const SignUpForm = ({closeModal}:{closeModal: () => void}) => {
    const form = useForm({
        initialValues: {
            identity: { email: "", username: "" },
            password: "",
            passwordConfirm: "",
        },
        validate: {
            passwordConfirm: (value, values) =>
                value === values.password
                    ? null
                    : "Les mots de passe doivent correspondre",
        },
    });
    return (
        <form
            onSubmit={form.onSubmit((values) => {
                handleSignin(values, closeModal);
            })}
        >
            <Flex gap={"xs"}>
                <TextInput
                    sx={{ flex: 1 }}
                    label={"Adresse email"}
                    {...form.getInputProps("identity.email")}
                />
                <TextInput
                    sx={{ flex: 1 }}
                    label={"Nom d'utilisateur"}
                    {...form.getInputProps("identity.username")}
                />
            </Flex>
            <Flex gap={"xs"}>
                <TextInput
                    sx={{ flex: 1 }}
                    label={"Mot de passe"}
                    {...form.getInputProps("password")}
                    type="password"
                />
                <TextInput
                    sx={{ flex: 1 }}
                    label={"Confirmation du mot de passe"}
                    {...form.getInputProps("passwordConfirm")}
                    type="password"
                />
            </Flex>
            <Button
                disabled={!(form.values.identity.email && form.values.password)}
                mt={8}
                type="submit"
            >
                SignUp
            </Button>
        </form>
    );
};

export default SignUpForm;
