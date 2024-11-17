/*
  Warnings:

  - The `status` column on the `Vote` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "votestatus" AS ENUM ('PENDING', 'WON', 'LOST');

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "status",
ADD COLUMN     "status" "votestatus" NOT NULL DEFAULT 'PENDING';
