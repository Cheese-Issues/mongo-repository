import RepositoryFunctions from "./repository-functions";
import { RepositoryModel } from "../model/repository-model";

export class MongoRepository<T extends object> extends RepositoryFunctions<T> {
    public constructor(model: RepositoryModel<T>) {
        super(model);
    }
}