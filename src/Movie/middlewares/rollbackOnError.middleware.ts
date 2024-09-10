import { NextFunction, Response, Request } from 'express'
import fs from 'fs'

class RollbackOnError {
  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      res.on('finish', async () => {
        if (res.statusCode >= 400 && req.files) {
          Object.values(req.files).forEach(
            (fileArray: Express.Multer.File[]) => {
              fileArray.forEach((file) => {
                fs.unlinkSync(file.path)
              })
            },
          )
        }
      })
      next()
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
    }
  }
}

export default new RollbackOnError()
