import aws from 'aws-sdk'
import uuidv4 from 'uuid/v4'
import { awsPromisify } from './promisify'

function kinesisHelper (aws, process, uuid, promisify) {
  const {
    IS_OFFLINE,
    KINESIS_ENDPOINT
  } = process.env

  let options = {}

  if (IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: `http://${KINESIS_ENDPOINT}`,
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  const kinesis = new aws.Kinesis(options)

  return {
    createStream: promisify(::kinesis.createStream),
    putRecord: promisify(::kinesis.putRecord),
    describeStream: promisify(::kinesis.describeStream),
    getShardIterator: promisify(::kinesis.getShardIterator),
    getRecords: promisify(::kinesis.getRecords)
  }
}

export const kinesis = kinesisHelper(aws, process, uuidv4, awsPromisify)
