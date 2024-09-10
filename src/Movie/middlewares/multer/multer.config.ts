import multer from 'multer'
import path from 'path'
import { nanoid } from 'nanoid'

const getPath = (fieldPath: string) =>
  path.join(__dirname, '..', '..', '..', '..', 'public', fieldPath)

const paths = {
  movie: getPath('movies'),
  poster: getPath('posters'),
  logo: getPath('logos'),
  background: getPath('backgrounds'),
}

export const multerConfig: multer.Options = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const fieldname = file.fieldname
      const destination = paths[fieldname as keyof typeof paths]

      if (!destination) {
        return cb(new Error('Invalid fieldname'), destination)
      }

      cb(null, destination)
    },
    filename: (req, file, cb) => {
      const filename = nanoid() + path.extname(file.originalname)

      cb(null, filename)
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedMime = ['video/mp4', 'image/jpeg', 'image/png']
    if (!allowedMime.includes(file.mimetype)) {
      cb(
        new Error(
          `${file.mimetype}: Invalid file type. Only accepts mp4, jpeg and png`,
        ),
      )
    } else {
      cb(null, true)
    }
  },
  limits: {
    files: 4,
  },
}
