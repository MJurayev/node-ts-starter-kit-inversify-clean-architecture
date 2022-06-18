import { Request, Response } from "express";
import { id, inject } from "inversify";
import { BaseHttpController, controller, httpDelete, httpGet, httpPost, request, requestParam, response } from "inversify-express-utils";
import UserService from "./UserService";

@controller("/users")
class UserController extends BaseHttpController {

    @inject(UserService)
    private readonly _userService: UserService;

    @httpGet("/")
    public async getAll() {
        const result = await this._userService.getAllUsers()
        return this.json(result)
    }

    @httpPost("/")
    private async insert(@request() req: Request) {
        const result = await this._userService.addUser(req.body)
        return this.json(result)
    }

    @httpDelete("/:id")
    private async delete(@requestParam("id") id: number) {
        const result = await this._userService.deleteUser(id)
        return this.json(result)
    }
}

export default UserController