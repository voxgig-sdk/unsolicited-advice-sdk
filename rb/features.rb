# UnsolicitedAdvice SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module UnsolicitedAdviceFeatures
  def self.make_feature(name)
    case name
    when "base"
      UnsolicitedAdviceBaseFeature.new
    when "test"
      UnsolicitedAdviceTestFeature.new
    else
      UnsolicitedAdviceBaseFeature.new
    end
  end
end
