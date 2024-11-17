-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Ongoing', 'Completed');

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "Team1" TEXT NOT NULL,
    "Team2" TEXT NOT NULL,
    "Status" "Status" NOT NULL DEFAULT 'Ongoing',
    "Venue" TEXT NOT NULL,
    "ResultUrl" TEXT NOT NULL,
    "Description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
