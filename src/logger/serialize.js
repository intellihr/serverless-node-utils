import _ from 'lodash'
import serializerr from 'serializerr'
import { curry } from 'ramda'

export const serialize = curry(
  ({ isString }, serializerr, obj) => isString(obj) ? obj : serializerr(obj)
)(_, serializerr)
