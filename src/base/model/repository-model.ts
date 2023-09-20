import { RepositorySchema } from "../schema/repository-schema";
import Client from "../connection/mongo-client";

export class RepositoryModel<T extends object> {
    private readonly schema: RepositorySchema;
    public readonly collection: string;
    private data: T;

    public constructor(schema: RepositorySchema, collection: string) {
        this.collection = collection;
        this.schema = schema;
    }

    private checkProperty(data: T): void {
        for (const key in this.schema) {
            if (!(key in data)) {
                if (this.schema[key].required) {
                    throw new Error(`The property "${key}" does not exist in data`);
                }
            }
        }
    }
}