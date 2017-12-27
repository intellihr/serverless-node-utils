import { Validator as JsValidator } from 'jsonschema'
import validator from 'validator'

class JsonSchemaValidator extends JsValidator {
  constructor () {
    super()

    this.customFormats = {
      iso8601: input => {
        return validator.isISO8601(input)
      }
    }
  }
}

const jsv = new JsonSchemaValidator()

export const validate = ::jsv.validate
