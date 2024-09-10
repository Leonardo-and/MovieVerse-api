import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.number().default(3001),
  TMDB_API_KEY: z.string(),
  COOKIE_SECRET: z.string().uuid(),
  URL: z.string().url(),
})

const _env = envSchema.safeParse({
  ...process.env,
  PORT: parseInt(process.env.PORT || '3001'),
})

if (!_env.success) {
  console.error('Invalid enviroment variables', _env.error?.format())
  throw new Error('Invalid enviroment variables')
}

export const env = _env.data
