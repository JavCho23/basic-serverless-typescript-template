import  * as Sentry from "@sentry/serverless"
import { Handler } from "aws-lambda";
const SENTRY_DSN = process.env.SENTRY_DSN


class SentryServerless {
  constructor(){
    Sentry.AWSLambda.init({
      dsn: SENTRY_DSN,
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 0,
      environment: process.env.ENV,
    });
  }
  wrapHandler(handler: Handler<unknown, unknown>){
    return Sentry.AWSLambda.wrapHandler(handler)
  }
}

export default new SentryServerless()
