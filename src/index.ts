import { connect, disconnect } from "./base/connection/mongo-connection";
import { RepositorySchema } from "./base/schema/repository-schema";
import { RepositoryModel } from "./base/model/repository-model";
import { MongoRepository } from "./base/repository/mongo-repository";

const user: RepositorySchema = {
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
    },
}

interface IUser {
    name: string;
    email: string;
}

const userData: IUser = {
    name: "dev",
    email: "email@dev",
}

const userData_: IUser = {
    name: "dev",
    email: "email@dev",
}

connect({
    url: "mongodb://admin:admin%40123@localhost:27017/?authMechanism=DEFAULT",
    dbName: "repository",
})

async function Start() {
    const userModel = new RepositoryModel<IUser>(user, "users_many");
    const rep = new MongoRepository(userModel);
    console.log(await rep.createMany([userData, userData_]))
}

Start();


