# UnsolicitedAdvice SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module UnsolicitedAdviceFeatures
  def self.make_feature(name)
    case name
    when "base"
      UnsolicitedAdviceBaseFeature.new
    when "ratelimit"
      UnsolicitedAdviceRatelimitFeature.new
    when "retry"
      UnsolicitedAdviceRetryFeature.new
    when "test"
      UnsolicitedAdviceTestFeature.new
    when "timeout"
      UnsolicitedAdviceTimeoutFeature.new
    else
      UnsolicitedAdviceBaseFeature.new
    end
  end
end
