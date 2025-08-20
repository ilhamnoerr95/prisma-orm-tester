/*
  Warnings:

  - You are about to drop the `PostCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."PostCategories" DROP CONSTRAINT "PostCategories_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PostCategories" DROP CONSTRAINT "PostCategories_postId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_PostCategories" DROP CONSTRAINT "_PostCategories_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_PostCategories" DROP CONSTRAINT "_PostCategories_B_fkey";

-- DropTable
DROP TABLE "public"."PostCategories";

-- DropTable
DROP TABLE "public"."_PostCategories";

-- CreateTable
CREATE TABLE "public"."post_categories" (
    "postId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "post_categories_pkey" PRIMARY KEY ("postId","categoryId")
);

-- AddForeignKey
ALTER TABLE "public"."post_categories" ADD CONSTRAINT "post_categories_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."post_categories" ADD CONSTRAINT "post_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
