# UnsolicitedAdvice SDK exists test

require "minitest/autorun"
require_relative "../UnsolicitedAdvice_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = UnsolicitedAdviceSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
