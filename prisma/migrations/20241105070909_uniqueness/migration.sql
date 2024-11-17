/*
  Warnings:

  - A unique constraint covering the columns `[ResultUrl]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Event_ResultUrl_key" ON "Event"("ResultUrl");
