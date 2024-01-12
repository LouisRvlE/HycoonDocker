import { Record as PocketRecord } from "pocketbase";
import { info } from "./info";

export type infoRecord = PocketRecord & info;
