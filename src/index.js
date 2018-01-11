import Resp from './response'
import { validate as jsv } from './jsonSchema'
import { awsPromisify as awsp, execPromisify as execp } from './promisify'
import { kinesis as kin } from './kinesis'
import { dynamoDB as dyn } from './dynamoDB'
import { s3 as _s3 } from './s3'

export const Response = Resp
export const jsValidate = jsv
export const awsPromisify = awsp
export const execPromisify = execp
export const kinesis = kin
export const dynamoDB = dyn
export const s3 = _s3
