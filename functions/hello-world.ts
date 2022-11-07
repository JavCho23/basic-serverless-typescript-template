import SentryServerless from '../src/sentry'

export const handler = SentryServerless.wrapHandler(async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: 'world', event }),
    headers: {
      "Content-Type": "application/json"
    },
  }

})