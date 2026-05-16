# UnsolicitedAdvice SDK utility: make_context

from core.context import UnsolicitedAdviceContext


def make_context_util(ctxmap, basectx):
    return UnsolicitedAdviceContext(ctxmap, basectx)
