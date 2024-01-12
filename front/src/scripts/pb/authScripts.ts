import { notifications } from "@mantine/notifications";
import { socket } from "../globalVariables";
import { collections } from "./collections";
import { pb } from "./pb";

type valuesType = {
    identity: { username?: string; email: string };
    password: string;
    passwordConfirm?: string;
};

const defaultBuildings: string[] = ["titane_mine","town_hall"]

const handleSignin = async (values: valuesType, closeModal: () => void) => {
    try {
        await pb.collection(collections.users).create({
            username: values.identity.username,
            email: values.identity.email,
            emailVisibility: true,
            password: values.password,
            passwordConfirm: values.passwordConfirm,
            mutate: {},
            incomes: {},
            ressources: {},
            pinned: [],
            unlockedBuildings: defaultBuildings,
            unlockedQuests: [],
        });
        handleLogin(values, closeModal);
    } catch (error: any) {
        notifications.show({
            title: "Error",
            message: `[${error}] Erreur lors de la création du compte`,
            autoClose: 5000,
            withCloseButton: true,
            color: "red",
        });
    }
};

const handleLogin = async (
    values: valuesType,
    closeModal: undefined | (() => void)
) => {
    try {
        const r = await pb
            .collection(collections.users)
            .authWithPassword(values.identity.email, values.password);
        closeModal && closeModal();
        r.record.id;
        socket.emit("updateID", { id: r.record.id });
    } catch (error: any) {
        notifications.show({
            title: "Error",
            message: `[${error}] Email ou mot de passe incorrect`,
            autoClose: 5000,
            withCloseButton: true,
            color: "red",
        });
    }
};

const handleLogout = () => {
    //unsubcribe()
    socket.emit("logout");
    pb.authStore.clear();
};

export { handleLogin, handleLogout, handleSignin };
