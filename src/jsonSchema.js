import { isNil, isNumber, toString } from 'lodash'
import * as R from 'ramda'
import validator from 'validator'
import { Validator as JsValidator } from 'jsonschema'
import cleanDeep from 'clean-deep'

function allowEmpty (fn) {
  return (input, ...args) => {
    if (isNil(input)) {
      return () => true
    }
    return fn(input, ...args)
  }
}

function allowNumber (fn) {
  return (input, ...args) => {
    if (isNumber(input)) {
      return fn(toString(input), ...args)
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
      url: input => defaultValidator(validator.isURL)(
        input,
        { require_tld: false, allow_underscores: true }
      )
    }
  }
}

const jsv = new JsonSchemaValidator()

export const validate = (body, schema) => ::jsv.validate(
  cleanDeep(
    body,
    {
      emptyArrays: false,
      emptyObjects: false,
      emptyStrings: false,
      nullValues: true,
      undefinedValues: true
    }
  ),
  schema
)
