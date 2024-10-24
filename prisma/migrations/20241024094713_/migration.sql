-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR NOT NULL,
    "color" VARCHAR NOT NULL,
    "year" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);
