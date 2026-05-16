package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAdviceEntityFunc func(client *UnsolicitedAdviceSDK, entopts map[string]any) UnsolicitedAdviceEntity

