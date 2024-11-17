-- CreateEnum
CREATE TYPE "Predicted" AS ENUM ('ONE', 'TWO');

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "predicted" "Predicted" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
