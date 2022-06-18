import * as bcrypt from 'bcrypt'
async function hashString(str: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    const hashed = await bcrypt.hash(str, salt)
    if (!hashed) throw new Error("Something went wrong during password hashing")
    return hashed
}

async function compareHash(str: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(str, hash)
}


export { hashString, compareHash }
