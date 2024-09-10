import axios, { type AxiosInstance } from 'axios'
import { env } from '@/env'
import { genres } from './genres'
import {
  TMDBApiResponse,
  TMDBGenre,
  TMDBMovie,
  TMDBMediaResponse,
  TMDBImage,
} from './TMDB.interface'
import { BadRequest } from '@/errors/bad-request.error'

class TMDBRepository {
  private apiKey: string
  private baseUrl: string
  private api: AxiosInstance

  constructor(apiKey: string) {
    this.apiKey = apiKey
    this.baseUrl = 'https://api.themoviedb.org/3'
    this.api = axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    })
  }

  public async searchMovie(query: string): Promise<TMDBMovie[]> {
    const movie = await this.api.get<TMDBApiResponse>('/search/movie', {
      params: {
        query,
      },
    })

    if (!movie.data.results) throw new BadRequest('No movies found', 404)

    return movie.data.results
  }

  public async searchMoviePosters(id: number): Promise<{ url: string }[]> {
    const response = await this.api.get<TMDBMediaResponse>(
      `/movie/${id}/images`,
    )
    const posters = response.data.posters.map((poster: TMDBImage) => {
      return {
        url: `https://image.tmdb.org/t/p/original${poster.file_path}`,
      }
    })
    return posters
  }

  public async getMovieGenres(ids: number[]): Promise<string[]> {
    const movieGenres = genres.filter((genre: TMDBGenre) =>
      ids.includes(genre.id),
    )
    return movieGenres.map((genre: TMDBGenre) => genre.name)
  }

  async getMovieTMDB(req: Request, res: Response) {
    // const paramsSchema = z.object({
    //   title: z.string(),
    // })
    // const { title } = paramsSchema.parse(req.params)
    //
    // const movies = await tmdb.searchMovie(title)
    // if (!movies) {
    //   throw new BadRequest('Movie not found', 404)
    // }
    // const moviesWithGenresName = await Promise.all(
    //   movies.map(async (movie) => {
    // eslint-disable-next-line
        //   const { genre_ids, ...movieData } = movie
    // const genres = await tmdb.getMovieGenres(genre_ids)
    // return {
    //   ...movieData,
    //   genres,
    // }
    //   }),
    // )
    //
    // return res.json(moviesWithGenresName).status(200)
  }

  //   async getMoviePosters(req: Request, res: Response) {
  //     const paramsSchema = z.object({
  //       id: z.string(),
  //     })
  //     const { id } = paramsSchema.parse(req.params)

  //     const posters = await tmdb.getMoviePosters(Number(id))
  //     return res.json(posters).status(200)
  //   }
}

export const tmdb = new TMDBRepository(env.TMDB_API_KEY)
