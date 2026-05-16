# UnsolicitedAdvice SDK utility: make_context
require_relative '../core/context'
module UnsolicitedAdviceUtilities
  MakeContext = ->(ctxmap, basectx) {
    UnsolicitedAdviceContext.new(ctxmap, basectx)
  }
end
