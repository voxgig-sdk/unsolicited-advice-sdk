# UnsolicitedAdvice SDK utility: feature_add
module UnsolicitedAdviceUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
