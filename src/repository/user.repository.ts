import { PrismaClient, User } from "@prisma/client";
import { injectable } from "inversify";
import { DBContext } from "../infrastructure/database/DBContext";

@injectable()
class UserRepository {
    constructor(private readonly _dbContext: DBContext) { }

    async all(): Promise<User[]> {
        return await this._dbContext.user.findMany()
    }

    async create(data: User): Promise<User> {
        const created = await this._dbContext.user.create({
            data
        })

        return created
    }

    async delete(id: number): Promise<User> {
        const deleted = await this._dbContext.user.delete({
            where: {
                id
            }
        })
        return deleted
    }

}

export default UserRepository