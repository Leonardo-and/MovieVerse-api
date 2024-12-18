import { CorsOptions } from 'cors'

export const corsConfig: CorsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}
