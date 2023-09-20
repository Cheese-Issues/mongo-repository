import { ConnectionOptions } from "./types";

export interface IConnection {
    url: string;
    dbName: string;
    options?: ConnectionOptions
}

export interface IDisconnect {
    force?: boolean;
}