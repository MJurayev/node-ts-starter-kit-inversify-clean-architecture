import { User } from "@prisma/client";
import { inject, injectable } from "inversify";
import UserRepository from "../repository/user.repository";

@injectable()
class UserService {
    constructor(private readonly _userRepo: UserRepository) {
    }

    async all(): Promise<User[]> {
        const result = await this._userRepo.all()
        return result
    }

    async create(data: User): Promise<User> {
        const result = await this._userRepo.create(data)
        return result
    }

    async delete(id: number): Promise<User> {
        const result = await this._userRepo.delete(id)
        return result
    }
    async changePassword(id: number) {

    }
}



export default UserService