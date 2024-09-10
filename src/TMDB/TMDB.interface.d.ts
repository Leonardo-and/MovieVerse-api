export interface TMDBMovie {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface TMDBApiResponse {
  page: number
  results: TMDBMovie[]
  total_pages: number
  total_results: number
}

export interface TMDBImage {
  aspect_ratio: number
  height: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

interface TMDBMediaResponse {
  backdrops: Image[]
  id: number
  logos: Image[]
  posters: Image[]
}

export interface TMDBGenre {
  id: number
  name: string
}
