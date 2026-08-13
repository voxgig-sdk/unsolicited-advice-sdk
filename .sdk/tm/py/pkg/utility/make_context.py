# UnsolicitedAdvice SDK utility: make_context

from projectname_sdk.core.context import UnsolicitedAdviceContext


def make_context_util(ctxmap, basectx):
    return UnsolicitedAdviceContext(ctxmap, basectx)
