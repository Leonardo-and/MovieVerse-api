import axios from 'axios'
import { IMovieApiRepository } from './IMovieApi.repository'
import { TMDBMovie, TMDBMovieResponse } from './TMDBMovie'
import { env } from '@/env'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: env.TMDB_API_KEY,
  },
})

export class TMDBRepository implements IMovieApiRepository {
  async search(query: string): Promise<TMDBMovie[]> {
    const foundMovies = await api.get<TMDBMovieResponse>('/search/movie', {
      params: {
        query,
      },
    })

    return foundMovies.data.results
  }
}
