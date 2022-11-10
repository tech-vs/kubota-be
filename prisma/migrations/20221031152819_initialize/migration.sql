-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Operator', 'Manager', 'SAP_Operator', 'Administrator');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Finished', 'Repack');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Operator',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pallet" (
    "id" SERIAL NOT NULL,
    "palletNo" TEXT NOT NULL,
    "part1" TEXT NOT NULL,
    "part2" TEXT NOT NULL,
    "part3" TEXT NOT NULL,
    "part4" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Pallet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Pallet_palletNo_key" ON "Pallet"("palletNo");
