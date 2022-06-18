import { User } from "@prisma/client";
import { injectable } from "inversify";
import { hashString } from "../utils/hash-string";
import UserService from "./user.service";
import { RegisterDto } from "./dtos/AuthDto";




@injectable()
class AuthService {
    constructor(private _userService: UserService) {
    }
    login() {

    }

    async register(data: RegisterDto) {

        data.password = await hashString(data.password)

        const user = await this._userService.addUser(<User>data)
        return user
    }

}



export default AuthService