import { Record, Admin, FileQueryParams } from "pocketbase";
import { pb } from "./pb";

export function getUrl(
    record?: Record | Admin | null,
    filename?: string,
    queryParams?: FileQueryParams | undefined
) {
    if (filename && record instanceof Record)
        return pb.getFileUrl(record, filename, queryParams);
    return undefined;
}
