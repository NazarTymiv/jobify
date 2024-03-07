/*
  Warnings:

  - The primary key for the `SavedJob` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `SavedJob` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `SavedJob` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SavedJob` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SavedJob" DROP CONSTRAINT "SavedJob_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "updatedAt",
ADD CONSTRAINT "SavedJob_pkey" PRIMARY KEY ("userId", "jobId");
