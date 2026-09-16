# UnsolicitedAdvice SDK feature factory

from unsolicitedadvice_sdk.feature.base_feature import UnsolicitedAdviceBaseFeature
from unsolicitedadvice_sdk.feature.ratelimit_feature import UnsolicitedAdviceRatelimitFeature
from unsolicitedadvice_sdk.feature.retry_feature import UnsolicitedAdviceRetryFeature
from unsolicitedadvice_sdk.feature.test_feature import UnsolicitedAdviceTestFeature
from unsolicitedadvice_sdk.feature.timeout_feature import UnsolicitedAdviceTimeoutFeature


_FEATURES = {
    "base": lambda: UnsolicitedAdviceBaseFeature(),
    "ratelimit": lambda: UnsolicitedAdviceRatelimitFeature(),
    "retry": lambda: UnsolicitedAdviceRetryFeature(),
    "test": lambda: UnsolicitedAdviceTestFeature(),
    "timeout": lambda: UnsolicitedAdviceTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
