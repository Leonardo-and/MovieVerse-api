import { ZodError, ZodIssue } from 'zod'

export class ValidationError {
  public readonly message: string
  public readonly statusCode: number
  public readonly issues: ZodIssue[]

  constructor(error: ZodError, statusCode = 400) {
    const [err] = error.issues
    const { message } = err

    this.issues = error.issues
    this.message = message
    this.statusCode = statusCode
  }
}
