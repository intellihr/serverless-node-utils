import { curry } from 'lodash'

function swaggerCallbackHandler (resolve, reject) {
  return (error, schema) => {
    if (error) {
      reject(error)
    }
    resolve(schema)
  }
}

function execCallbackHandler (console) {
  return (resolve, reject) => {
    return (error, stdout, stderr) => {
      if (error) {
        console.log(stdout)
        console.log(stderr)
        return reject(error)
      }
      resolve(stdout)
    }
  }
}

function awsCallbackHandler (resolve, reject) {
  return (error, data) => {
    if (error) {
      return reject(error)
    }
    resolve(data)
  }
}

function promisifyHandler (Promise, callbackHandler, fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, callbackHandler(resolve, reject))
    })
  }
}

const promisify = curry(promisifyHandler)(Promise)

export const awsPromisify = curry(promisify)(awsCallbackHandler)
export const execPromisify = curry(promisify)(execCallbackHandler(console))
export const swaggerPromisify = curry(promisify)(swaggerCallbackHandler)
