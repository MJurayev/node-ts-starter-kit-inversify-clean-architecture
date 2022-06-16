import { controller, httpGet } from "inversify-express-utils";

@controller("/users")
class UserController {
    @httpGet("/")
    async index() {
        return {
            message: "Hello WOrld"
        }
    }
}

export default UserController