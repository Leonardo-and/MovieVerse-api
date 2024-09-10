import { Movie } from '@/use-cases/movie'

export interface IMovieRepository {
  getAll(genresFilter: string | undefined): Promise<Movie[]>
  create(data: Omit<Movie, 'id' | 'createdAt' | 'updatedAt'>): Promise<Movie>
  findById(id: string): Promise<Movie>
  findByTitle(title: string): Promise<Movie[]>
  delete(id: string): Promise<void>
  getRecommended(): Promise<Movie | null>
  getReleases(): Promise<Movie[]>
}
