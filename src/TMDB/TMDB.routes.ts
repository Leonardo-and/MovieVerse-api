import { Router } from 'express'

const routes = Router()
routes.use('/tmdb', routes)

// routes.get('/tmdb/:title', movieController.getMovieTMDB)
// routes.get('/tmdb/posters/:id', movieController.getMoviePosters)

export const movieRoutes = routes
