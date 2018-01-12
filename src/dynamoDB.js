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

  const dynamoDBClient = new aws.DynamoDB.DocumentClient(options)
  const dynamoDB = new aws.DynamoDB(options)

  return {
    delete: promisify(::dynamoDBClient.delete),
    query: promisify(::dynamoDBClient.query),
    put: promisify(::dynamoDBClient.put),
    createTable: promisify(::dynamoDB.createTable),
    deleteTable: promisify(::dynamoDB.deleteTable),
    listTables: promisify(::dynamoDB.listTables)
  }
}

export const dynamoDB = dynamoDBHelper(aws, process, awsPromisify)
