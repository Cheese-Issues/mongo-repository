import { IConnection, IDisconnect } from "./mongo-client.interface";
import { LibMessages } from "../messages/lib-messages";
import { MongoClient } from "mongodb";

export default class Client {
    public static instance: MongoClient | null = null;

    public static async connect(props: IConnection): Promise<void> {
        if (this.instance === null) {
            this.instance = new MongoClient(props.url, props.options);
        }

        try { await this.instance.connect(); props.callback(LibMessages.connectionSuccess); } catch (error: any) {
            props.callback(LibMessages.connectionError);
            throw error;
        }
    }

    public static async tryConnect(props: IConnection): Promise<void> {
        this.instance = null;
        this.instance = new MongoClient(props.url, props.options);

        try { await this.instance.connect(); props.callback(LibMessages.connectionSuccess); } catch (error: any) {
            props.callback(LibMessages.connectionError);
            throw error;
        }
    }

    public static async disconnect(props: IDisconnect): Promise<void> {
        if (this.instance !== null) {
            try { await this.instance.close(props.force); props.callback(LibMessages.disconnectionSuccess) } catch (error: any) {
                props.callback(LibMessages.disconnectionError);
                throw error;
            }
        }
    }
}