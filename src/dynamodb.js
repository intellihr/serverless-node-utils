import aws from 'aws-sdk'
import { awsPromisify } from './promisify'

function dynamoDBHelper (aws, process, promisify) {
  const {
    IS_OFFLINE,
    DYNAMODB_ENDPOINT
  } = process.env

  let options = {}

  if (IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: DYNAMODB_ENDPOINT,
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  const dynamoDB = new aws.DynamoDB.DocumentClient(options)

  return {
    query: promisify(::dynamoDB.query),
    put: promisify(::dynamoDB.put)
  }
}

export const dynamoDB = dynamoDBHelper(aws, process, awsPromisify)
