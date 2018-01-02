import aws from 'aws-sdk'
import uuidv4 from 'uuid/v4'
import { awsPromisify } from './promisify'

function kinesisHelper (aws, process, uuid, promisify) {
  const {
    IS_OFFLINE,
    KINESIS_STREAM_NAME,
    SHARD_COUNT
  } = process.env

  let options = {}

  if (IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: 'http://localstack:4568',
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  const kinesis = new aws.Kinesis(options)

  return {
    createStream: () => promisify(::kinesis.createStream)({
      ShardCount: SHARD_COUNT,
      StreamName: KINESIS_STREAM_NAME
    }),
    putRecord: ({ Data }) => promisify(::kinesis.putRecord)({
      Data,
      PartitionKey: uuid(),
      StreamName: KINESIS_STREAM_NAME
    }),
    describeStream: () => promisify(::kinesis.describeStream)({
      StreamName: KINESIS_STREAM_NAME
    }),
    getShardIterator: ({ ShardId }) => promisify(::kinesis.getShardIterator)({
      ShardId,
      ShardIteratorType: 'TRIM_HORIZON',
      StreamName: KINESIS_STREAM_NAME
    }),
    getRecords: ({ ShardIterator }) => promisify(::kinesis.getRecords)({
      ShardIterator
    })
  }
}

export const kinesis = kinesisHelper(aws, process, uuidv4, awsPromisify)
