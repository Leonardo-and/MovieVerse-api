import { Router } from 'express'
import { searchMovieAPIController } from '@/use-cases/search-movie-api'

export const movieApiRoutes = Router()

movieApiRoutes.use('/ext', movieApiRoutes)

movieApiRoutes.get('/search', (req, res) =>
  searchMovieAPIController.handle(req, res),
)
