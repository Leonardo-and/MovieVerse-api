import multer from 'multer'
import { multerConfig } from '@/Movie/middlewares/multer/multer.config'
import { Request, Response, NextFunction } from 'express'
import { BadRequest } from '@/errors/bad-request.error'
import { fields } from './fields.config'

class FilesMiddleware {
  public upload = multer(multerConfig).fields(fields)

  public handle(req: Request, res: Response, next: NextFunction) {
    const requiredFields = fields.map((field) => field.name)

    if (!requiredFields.every((field) => req.files && field in req.files)) {
      return next(new BadRequest(`Missing required files`))
    }
    next()
  }
}

export const filesMiddleware = new FilesMiddleware()
