import { Router } from 'express'
import { createMovieController } from '@/use-cases/create-movie'
import { getMovieController } from '@/use-cases/get-movie'
import { getAllMoviesController } from '@/use-cases/get-all-movies'
import { filesMiddleware } from '../Movie/middlewares/files-upload.middleware'
import { deleteMovieController } from '@/use-cases/delete-movie'
import { getRecommendedMovieController } from '@/use-cases/get-recommended-movie'
import { searchMovieController } from '@/use-cases/search-movie'
import { streamMovieController } from '@/use-cases/stream-movie'
import { getMovieReleasesController } from '@/use-cases/get-movie-releases'

const routes = Router()
routes.use('/movies', routes)

routes.get('/watch/:id', (req, res) => streamMovieController.handle(req, res))

routes.get('/search', (req, res) => searchMovieController.handle(req, res))
routes.get('/releases', (req, res) =>
  getMovieReleasesController.handle(req, res),
)
routes.get('/', (req, res) => getAllMoviesController.handle(req, res))
routes.get('/recommended', (req, res) =>
  getRecommendedMovieController.handle(req, res),
)
routes.get('/:id', (req, res) => getMovieController.handle(req, res))
routes.post(
  '/',
  filesMiddleware.upload,
  filesMiddleware.handle,
  //   rollbackOnError.handle,
  (req, res) => createMovieController.handle(req, res),
)
routes.delete('/:id', (req, res) => deleteMovieController.handle(req, res))

// routes.get('/tmdb/:title', movieController.getMovieTMDB)
// routes.get('/tmdb/posters/:id', movieController.getMoviePosters)

export const movieRoutes = routes
