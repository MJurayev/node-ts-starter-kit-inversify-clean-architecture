import { Application, json, urlencoded } from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { MyApplication } from "./Application";
import { DBContext } from "../../infrastructure/database/DBContext";
import UserRepository from "../../repository/user.repository";
import UserService from "../../use-case/user.service";


import "./controllers/user.controller";
class App extends MyApplication {
    protected app: Application;

    async configureServices() {
        this.container.bind(DBContext).toSelf()
        this.container.bind(UserRepository).toSelf()
        this.container.bind(UserService).toSelf()
    }

    async setup() {
        const _db = this.container.get(DBContext)
        await _db.connect()

        const server = new InversifyExpressServer(this.container);

        server.setConfig((app) => {
            app.use(json())
                .use(urlencoded({ extended: true }))
        })

        this.app = server.build()
        const port = 3030
        this.app.listen(port, () => {
            console.log(`Server started in ${port}`)
        })
    }
}


export default App;