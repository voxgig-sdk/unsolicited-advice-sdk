# UnsolicitedAdvice SDK feature factory

from feature.base_feature import UnsolicitedAdviceBaseFeature
from feature.test_feature import UnsolicitedAdviceTestFeature


def _make_feature(name):
    features = {
        "base": lambda: UnsolicitedAdviceBaseFeature(),
        "test": lambda: UnsolicitedAdviceTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
