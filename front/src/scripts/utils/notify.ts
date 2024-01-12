import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { socket } from "../globalVariables";

type notifyReturnType = {
    color?: string;
    title?: string;
    message: string;
    id: string;
    loading?: boolean;
    autoClose?: number | boolean;
};

export const notify = () => {
    useEffect(() => {
        socket.on(
            "notify",
            ({
                color,
                title,
                message,
                id,
                loading,
                autoClose,
            }: notifyReturnType) => {
                id
                    ? notifications.update({
                          id: id,
                          message: message,
                          title: title,
                          color: color,
                          loading: loading,
                          autoClose: autoClose,
                      })
                    : notifications.show({
                          message: message,
                          title: title,
                          color: color,
                          loading: loading,
                          autoClose: autoClose,
                      });
            }
        );

        return () => {
            socket.off("notify");
        };
    }, []);
};
