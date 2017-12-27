import _ from 'lodash'

export function awsPromisifyHandler (Promise, fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          return reject(error)
        }
        resolve(data)
      })
    })
  }
}

export const awsPromisify = _.curry(awsPromisifyHandler)(Promise)
