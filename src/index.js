import Resp from './response'
import { validate as jsv } from './jsonSchema'
import { awsPromisify as awsp, execPromisify as execp } from './promisify'
import { kinesis as kin } from './kinesis'
import { dynamoDB as dyn } from './dynamoDB'

export const Response = Resp
export const jsValidate = jsv
export const awsPromisify = awsp
export const execPromisify = execp
export const kinesis = kin
export const dynamoDB = dyn
