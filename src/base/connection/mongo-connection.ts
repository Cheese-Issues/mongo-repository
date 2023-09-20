import { IConnection, IDisconnect } from "./mongo-client.interface";
import Client from "./mongo-client"

export const connect = async (props: IConnection): Promise<void> => {
    await Client.connect({
        url: props.url,
        dbName: props.dbName,
        callback: props.callback,
        options: props.options
    });
}

export const disconnect = async (props: IDisconnect): Promise<void> => {
    await Client.disconnect({
        force: props.force,
        callback: props.callback
    });
}