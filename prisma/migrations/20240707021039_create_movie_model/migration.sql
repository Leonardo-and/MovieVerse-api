-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "poster_filename" TEXT NOT NULL,
    "video_filename" TEXT NOT NULL,
    "background_filename" TEXT NOT NULL,
    "logo_filename" TEXT NOT NULL,
    "genres" TEXT[],
    "cast" TEXT[],
    "duration" INTEGER NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_id_key" ON "Movie"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_poster_filename_key" ON "Movie"("poster_filename");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_video_filename_key" ON "Movie"("video_filename");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_background_filename_key" ON "Movie"("background_filename");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_logo_filename_key" ON "Movie"("logo_filename");
