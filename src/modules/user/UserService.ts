import { User } from "@prisma/client";
import { inject, injectable } from "inversify";
import UserRepository from "./UserRepository";


interface CreateUserDto {

}

@injectable()
class UserService {
    @inject(UserRepository)
    private readonly _userRepo: UserRepository
    constructor() {

    }

    async getAllUsers(): Promise<User[]> {
        const result = await this._userRepo.getAll()
        return result
    }

    async addUser(data: User): Promise<User> {
        const result = await this._userRepo.insertUser(data)
        return result
    }

    async deleteUser(id: number): Promise<User> {
        const result = await this._userRepo.deleteUser(id)
        return result
    }
    async changePassword(id: number) {

    }
}



export default UserService