import { io } from "socket.io-client";

export const pocketBaseUrl =
    window.location.protocol + "//" + window.location.hostname + ":8080";
export const socket = io(
    window.location.protocol + "//" + window.location.hostname + ":3000"
);

export const endPoints = {
    updateID: "updateID",
    addBuilding: "addBuilding",
    upgradeBuilding: "upgradeBuilding",
    deleteBuilding: "deleteBuilding",
    log: "log",
};
