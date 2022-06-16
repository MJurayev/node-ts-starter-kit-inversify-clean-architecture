import { Application } from "express";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

class App {
    private app: Application;
    constructor(container: Container) {
        const server = new InversifyExpressServer(container);
        this.app = server.build()
    }

    start(port: number, cb?: VoidFunction) {

        this.app.listen(port, cb)
    }


}


export default App;