import _ from 'lodash'
import * as R from 'ramda'
import validator from 'validator'
import { Validator as JsValidator } from 'jsonschema'

function allowEmpty (fn) {
  return (input, ...args) => {
    if (_.isNil(input)) {
      return () => true
    }
    return fn(input, ...args)
  }
}

function allowNumber (fn) {
  return (input, ...args) => {
    if (_.isNumber(input)) {
      return fn(_.toString(input), ...args)
    }
    return fn(input, ...args)
  }
}

const defaultValidator = R.compose(allowEmpty, allowNumber)

class JsonSchemaValidator extends JsValidator {
  constructor () {
    super()

    this.customFormats = {
      iso8601: input => defaultValidator(validator.isISO8601)(input),
      uuid: input => defaultValidator(validator.isUUID)(input),
      url: input => defaultValidator(validator.isURL)(input, { require_tld: false })
    }
  }
}

const jsv = new JsonSchemaValidator()

export const validate = ::jsv.validate
