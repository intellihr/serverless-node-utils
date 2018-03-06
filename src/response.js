import { defaultTo, map, toString } from 'lodash'
import HTTPStatus from 'http-status'

export default class Response {
  constructor (
    callback,
    {
      cors = false
    } = {}
  ) {
    this._callback = callback
    this._corsHeaders = cors ? {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    } : {}
  }

  emptyResponse () {
    return this._callback(null, {
      statusCode: HTTPStatus.NO_CONTENT,
      headers: this._corsHeaders
    })
  }

  successResponse (
    {
      response = {}
    } = {}
  ) {
    return this._callback(null, {
      statusCode: HTTPStatus.OK,
      headers: this._corsHeaders,
      body: JSON.stringify(response)
    })
  }

  resourceNotFoundResponse () {
    return this._callback(null, {
      statusCode: HTTPStatus.NOT_FOUND,
      headers: this._corsHeaders,
      body: JSON.stringify({
        error: 'Resource not found'
      })
    })
  }

  forbiddenResponse () {
    return this._callback(null, {
      statusCode: HTTPStatus.FORBIDDEN,
      headers: this._corsHeaders,
      body: JSON.stringify({
        error: 'Forbidden Access'
      })
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
      headers: this._corsHeaders,
      body: JSON.stringify({
        error: 'Error'
      })
    })
  }

  clientErrorResponse (
    {
      errors
    }
  ) {
    const returnErrors = map(errors, error => {
      const instance = toString(error.property)
      const prefix = instance ? instance + ' ' : instance

      return {
        code: defaultTo(error.code, HTTPStatus.BAD_REQUEST),
        detail: `${prefix}${defaultTo(error.message, 'Bad Request')}`
      }
    })

    return this._callback(null, {
      statusCode: HTTPStatus.BAD_REQUEST,
      headers: this._corsHeaders,
      body: JSON.stringify({
        errors: returnErrors
      })
    })
  }
}
