import _ from 'lodash'
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
      body: {
        error: 'Resource not found'
      }
    })
  }

  forbiddenResponse () {
    return this._callback(null, {
      statusCode: HTTPStatus.FORBIDDEN,
      headers: this._corsHeaders,
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
      headers: this._corsHeaders,
      body: {
        error: 'Error'
      }
    })
  }

  clientErrorResponse (
    {
      errors
    }
  ) {
    const returnErrors = _.map(errors, error => {
      return {
        code: _.defaultTo(error.code, HTTPStatus.BAD_REQUEST),
        detail: _.defaultTo(error.message, 'Bad Request')
      }
    })

    return this._callback(null, {
      statusCode: HTTPStatus.BAD_REQUEST,
      headers: this._corsHeaders,
      body: {
        errors: returnErrors
      }
    })
  }
}
