import HTTPStatus from 'http-status'

export function genericResponse (
  callback,
  {
    error = null,
    response = {}
  } = {}
) {
  if (error) {
    return callback(null, {
      statusCode: HTTPStatus.NOT_FOUND,
      body: {
        error: error
      }
    })
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(response)
  })
}

export function resourceNotFoundResponse (callback) {
  return callback(null, {
    statusCode: HTTPStatus.NOT_FOUND,
    body: {
      error: 'Resource not found'
    }
  })
}

export function forbiddenResponse (callback) {
  return callback(null, {
    statusCode: HTTPStatus.FORBIDDEN,
    body: {
      error: 'Forbidden Access'
    }
  })
}

export function errorResponse (
  callback,
  {
    error = null
  } = {}
) {
  if (error) {
    console.log(error)
  }
  return callback(null, {
    statusCode: HTTPStatus.INTERNAL_SERVER_ERROR,
    body: {
      error: 'Error'
    }
  })
}
