import { Application, json, urlencoded } from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { BaseApplication } from "../domain/Application";
import { DBContext } from "../infrastructure/database/DBContext";
import MailContext from "../infrastructure/nodemailer/MailContext";
import UserRepository from "../repository/user.repository";
import UserService from "../use-case/user.service";


import "./controllers/user.controller";
class App extends BaseApplication {
    protected app: Application;

    async configureServices() {
        // Dependency injection container
        this.container.bind(DBContext).toSelf()
        this.container.bind(MailContext).toSelf()


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
        const port = process.env.PORT || 3031
        this.app.listen(port, () => {
            console.log(`Server started in ${port}`)
        })
    }
}


export default App;