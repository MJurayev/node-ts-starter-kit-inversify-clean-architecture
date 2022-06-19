import { hashString } from "./hash-string"

describe("Hash string function unit test", () => {
    it("qaytaradigan qiymati string bo'lishi kerak", async () => {
        const result = await hashString("")
        expect(typeof result).toBe("string")
    })
})