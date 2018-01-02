import aws from 'aws-sdk'
import { awsPromisify } from './promisify'

function dynamoDBHelper (aws, process, promisify) {
  const {
    IS_OFFLINE
  } = process.env

  let options = {}

  if (IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: 'http://localstack:4569',
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  const dynamoDB = new aws.DynamoDB.DocumentClient(options)

  return {
    query: promisify(::dynamoDB.query)
  }
}

export const dynamoDB = dynamoDBHelper(aws, process, awsPromisify)
