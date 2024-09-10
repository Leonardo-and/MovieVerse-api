export class ApiError {
  public readonly message: string
  public readonly statusCode: number

  constructor(message = 'Internal Server Error', statusCode = 500) {
    this.message = message
    this.statusCode = statusCode
  }
}
