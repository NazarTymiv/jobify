/*
  Warnings:

  - You are about to drop the column `desctiption` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "desctiption",
ADD COLUMN     "description" TEXT;
