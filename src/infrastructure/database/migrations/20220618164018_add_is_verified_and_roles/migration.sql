-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'USER', 'NOAUTH');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "roles" "Roles"[];
