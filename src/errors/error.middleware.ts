import { NextFunction, Request, Response } from 'express'
import { ValidationError } from '@/errors/validation.error'
import { ApiError } from '@/errors/api.error'
import { logger } from '@/lib/pino'
import { MulterError } from 'multer'
import { AxiosError } from 'axios'
import { BadRequest } from './bad-request.error'

class ErrorMiddleware {
  public handle(
    error: Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
  ): Response {
    if (error instanceof ValidationError) {
      return res.status(error.statusCode).json({
        error: true,
        status: error.statusCode,
        message: error.message,
        data: {},
      })
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({
        error: true,
        status: error.statusCode,
        message: error.message,
        data: {},
      })
    }
    if (error instanceof MulterError) {
      return res.status(400).json({
        error: true,
        status: 400,
        message: error.message,
        data: {},
      })
    }
    if (error instanceof AxiosError) {
      return res.status(400).json({
        error: true,
        status: 400,
        message: error.message,
        data: {},
      })
    }
    if (error instanceof BadRequest) {
      return res.status(error.statusCode).json({
        error: true,
        status: error.statusCode,
        message: error.message,
        data: {},
      })
    }
    logger.error(`Internal Server Error: ${JSON.stringify(error.stack)}`)

    return res.status(500).json({
      error: true,
      status: 500,
      message: error.message,
      data: {},
    })
  }
}

export const errorMiddleware = new ErrorMiddleware()
