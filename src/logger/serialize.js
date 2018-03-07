import { isString } from 'lodash'
import serializerr from 'serializerr'

export const serialize = obj => isString(obj) ? obj : serializerr(obj)
