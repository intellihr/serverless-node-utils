import HTTPStatus from 'http-status'

export default class Response {
  constructor (
    callback
  ) {
    this._callback = callback
  }

  successResponse (
    {
      response = {}
    } = {}
  ) {
    return this._callback(null, {
      statusCode: HTTPStatus.OK,
      body: JSON.stringify(response)
    })
  }

  resourceNotFoundResponse () {
    return this._callback(null, {
      statusCode: HTTPStatus.NOT_FOUND,
      body: {
        error: 'Resource not found'
      }
    })
  }

  forbiddenResponse () {
    return this._callback(null, {
      statusCode: HTTPStatus.FORBIDDEN,
      body: {
        error: 'Forbidden Access'
      }
    })
  }

  errorResponse (
    {
      error = null
    } = {}
  ) {
    if (error) {
      console.log(error)
    }

    return this._callback(null, {
      statusCode: HTTPStatus.INTERNAL_SERVER_ERROR,
      body: {
        error: 'Error'
      }
    })
  }
}
