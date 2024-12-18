import { TMDBMovie } from './TMDBMovie'

export interface IMovieApiRepository {
  search: (query: string) => Promise<TMDBMovie[]>
}
