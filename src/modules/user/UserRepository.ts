import { PrismaClient, User } from "@prisma/client";
import { injectable } from "inversify";
import prisma from "../../infrastructure/database";

@injectable()
class UserRepository {
    async getAll(): Promise<User[]> {
        return await prisma.user.findMany()
    }

    async insertUser(data: User): Promise<User> {
        const created = await prisma.user.create({
            data
        })

        return created
    }

    async deleteUser(id: number): Promise<User> {
        const deleted = await prisma.user.delete({
            where: {
                id
            }
        })
        return deleted
    }

}

export default UserRepository