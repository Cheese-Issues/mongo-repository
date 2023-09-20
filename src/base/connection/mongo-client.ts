import { IConnection, IDisconnect } from "./mongo-client.interface";
import { LibMessages } from "../messages/lib-messages";
import { MongoClient } from "mongodb";

export default class Client {
    public static instance: MongoClient | null = null;
    public static dbName: string;

    public static async connect(props: IConnection, callback?: (res: string) => void): Promise<void> {
        if (this.instance === null) {
            this.instance = new MongoClient(props.url, props.options);
            this.dbName = props.dbName;
        }

        try {
            await this.instance.connect();
            callback ? callback(LibMessages.connectionSuccess) : undefined;
        } catch (error: any) {
            callback ? callback(LibMessages.connectionError) : undefined;
            throw error;
        }
    }

    public static async tryConnect(props: IConnection, callback?: (res: string) => void): Promise<void> {
        this.instance = null;
        this.instance = new MongoClient(props.url, props.options);

        try {
            await this.instance.connect();
            callback ? callback(LibMessages.connectionSuccess) : undefined;
        } catch (error: any) {
            callback ? callback(LibMessages.connectionError) : undefined;
            throw error;
        }
    }

    public static async disconnect(props: IDisconnect, callback?: (res: string) => void): Promise<void> {
        if (this.instance !== null) {
            try {
                await this.instance.close(props.force);
                callback ? callback(LibMessages.disconnectionSuccess) : undefined;
            } catch (error: any) {
                callback ? callback(LibMessages.disconnectionError) : undefined;
                throw error;
            }
        }
    }
}