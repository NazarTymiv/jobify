/*
  Warnings:

  - You are about to drop the `_UserFollows` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_B_fkey";

-- DropTable
DROP TABLE "_UserFollows";

-- CreateTable
CREATE TABLE "Follower" (
    "followerId" INTEGER NOT NULL,
    "followsId" INTEGER NOT NULL,

    CONSTRAINT "Follower_pkey" PRIMARY KEY ("followerId","followsId")
);

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followsId_fkey" FOREIGN KEY ("followsId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
