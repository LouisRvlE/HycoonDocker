import { Record, Admin } from "pocketbase";
import { pb } from "./pb";

export function isAdmin() {
    if (pb.authStore.model instanceof Admin) return "admin";
    if (pb.authStore.model instanceof Record) return "user";
    return "none";
}
