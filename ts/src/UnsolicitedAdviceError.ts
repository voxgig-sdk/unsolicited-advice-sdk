
import { Context } from './Context'


class UnsolicitedAdviceError extends Error {

  isUnsolicitedAdviceError = true

  sdk = 'UnsolicitedAdvice'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  UnsolicitedAdviceError
}

