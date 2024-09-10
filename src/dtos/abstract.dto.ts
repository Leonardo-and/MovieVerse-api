import { ZodError, type ZodType, z } from 'zod'
import { ApiError } from '@/errors/api.error'
import { ValidationError } from '@/errors/validation.error'

export abstract class AbstractDTO<Schema extends ZodType> {
  protected data: z.infer<Schema> | undefined

  public constructor(data: Record<string, unknown>) {
    this.validate(data)
  }

  protected abstract rules(): Schema

  public getAll(): z.infer<Schema> {
    return this.data
  }

  public get<Key extends keyof z.infer<Schema>>(key: Key) {
    return this.data![key]
  }

  private validate(data: Record<string, unknown>) {
    try {
      this.data = this.rules().parse(data)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ValidationError(error)
      }

      throw new ApiError('Internal Server Error')
    }
  }
}
