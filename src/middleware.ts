import { defaultMiddleware } from './middleware/default'
import { poweredBy } from './middleware/powered-by/powered-by'
import { logger } from './middleware/logger/logger'
import { basicAuth } from './middleware/basic-auth/basic-auth'
import { bodyParse } from './middleware/body-parse/body-parse'
import { cors } from './middleware/cors/cors'

export class Middleware {
  static default = defaultMiddleware
  static poweredBy = poweredBy
  static logger = logger
  static basicAuth = basicAuth
  static bodyParse = bodyParse
  static cors = cors
}