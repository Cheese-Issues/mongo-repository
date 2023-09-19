import { ConnectionOptions } from "./types";

export interface IConnection {
    url: string;
    callback: (response: string | any) => void;
    options?: ConnectionOptions
}

export interface IDisconnect {
    force?: boolean;
    callback: (response: string | any) => void
}