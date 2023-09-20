import { IRepositoryFunctions } from "./repository-functions.interface";
import * as types from "../types/repository-types";
import { RepositoryModel } from "../model/repository-model";
import Client from "../connection/mongo-client";

export default class RepositoryFunctions<T extends object> implements IRepositoryFunctions<T> {
    private readonly client: types.RepositoryClient = Client.instance;
    private readonly collection: types.RepositoryCollection;
    private readonly model: RepositoryModel<T>;

    public constructor(model: RepositoryModel<T>) {
        this.collection = this.client.db(Client.dbName).collection(model.collection);
        this.model = model;
    }

    public async create(data: T): Promise<T> {
        await this.collection.insertOne(data);
        return data;
    }

    public async createMany(data: Array<T>): Promise<Array<T>> {
        await this.collection.insertMany(data);
        return data;
    }

    public async delete(data: T): Promise<T> {
        return Promise.resolve(undefined);
    }

    public async deleteMany(data: Array<T>): Promise<Array<T>> {
        return Promise.resolve(undefined);
    }

    public async disable(data: T): Promise<T> {
        return Promise.resolve(undefined);
    }

    public async disableMany(data: Array<T>): Promise<Array<T>> {
        return Promise.resolve(undefined);
    }

    public async update(data: T): Promise<T> {
        return Promise.resolve(undefined);
    }

    public async updateMany(data: Array<T>): Promise<Array<T>> {
        return Promise.resolve(undefined);
    }
}