import Resp from './response'
import { validate as jsv } from './jsonSchema'
import { awsPromisify as awsp, execPromisify as execp } from './promisify'
import { swagger as _swagger } from './swagger'
import { kinesis as kin } from './kinesis'
import { dynamoDB as dyn } from './dynamoDB'
import { s3 as _s3 } from './s3'
import { sqs as _sqs } from './sqs'

export const Response = Resp

export const jsValidate = jsv

export const awsPromisify = awsp
export const execPromisify = execp

export const swagger = _swagger

export const kinesis = kin
export const dynamoDB = dyn
export const s3 = _s3
export const sqs = _sqs
