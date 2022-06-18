import { Application, json, urlencoded } from "express";
import { Container, inject } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import Database from "../infrastructure/database";

class App {
    private app: Application;

    constructor(container: Container) {
        const server = new InversifyExpressServer(container);
        server.setConfig((app) => {
            app.use(json())
                .use(urlencoded({ extended: true }))
        })
        this.app = server.build()

    }
    async start(port: number, cb) {
        this.app.listen(port || 8080, cb)
    }
}


export default App;