import { connect, disconnect } from "./base/connection/mongo-connection";

let process: Array<number> = [1, 2, 3, 4, 5];

for (const i of process) {
    if (i === 1) {
        connect({
            url: "mongodb://admin:admin%40123@localhost:27017/?authMechanism=DEFAULT",
            callback: (res) => {
                console.log(res);
            }
        })
    }

    if (i === 2) {
        disconnect({
            force: false,
            callback: (res) => {
                console.log(res);
            }
        })
    }
}