# ProjectName SDK exists test

import pytest
from unsolicitedadvice_sdk import UnsolicitedAdviceSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = UnsolicitedAdviceSDK.test(None, None)
        assert testsdk is not None
