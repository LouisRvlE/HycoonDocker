import PocketBase, {
    // RecordListQueryParams as pQueryParams,
    RecordAuthResponse,
    Record,
    Admin,
    RecordQueryParams,
} from "pocketbase";

import { pocketBaseUrl } from "../globalVariables";

// interface options {
//     params?: pQueryParams;
//     realtime?: boolean;
// }
export interface PromiseReturn {
    authData: RecordAuthResponse<Record> | AdminAuthResponse | void;
    error: string | null;
    status: "admin" | "user" | "none";
}
interface AdminAuthResponse {
    [key: string]: any;
    token: string;
    admin: Admin;
}

export interface useCollectionOptions {
    queryParams?: RecordQueryParams;
    realtime?: boolean;
    pageParams?: {
        perPage: number;
        page: number;
    };
}

export const pb = new PocketBase(pocketBaseUrl);
pb.autoCancellation(false);

export default pb;
