import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import { movieRoutes } from '@/routes/movie.routes'
import { corsConfig } from '@/config/cors.config'
import { errorMiddleware } from '@/errors/error.middleware'

class Application {
  app = express()
  constructor() {
    this.setMiddlewares()
    this.setRoutes()
    this.app.use(errorMiddleware.handle)
  }

  private setMiddlewares() {
    this.app.use(morgan('dev'))
    this.app.use(express.json())
    this.app.use(compression())
    this.app.use(cors(corsConfig))

    this.app.use('/poster', express.static('public/posters'))
    this.app.use('/background', express.static('public/backgrounds'))
    this.app.use('/logo', express.static('public/logos'))
  }

  private setRoutes() {
    this.app.use('/api/v1', movieRoutes)
  }
}

export const app = new Application().app
