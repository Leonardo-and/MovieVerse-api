export class BadRequest {
  public readonly message: string
  public readonly statusCode: number

  constructor(message = 'Bad Request', statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}
