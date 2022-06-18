import { PrismaClient } from "@prisma/client";
import { injectable } from "inversify";

@injectable()
export class DBContext {
    protected _db: PrismaClient;
    async connect() {
        this._db = new PrismaClient({
            log: ['query', 'error', 'info', 'warn']
        })
    }

    get user() {
        return this._db.user
    }
}