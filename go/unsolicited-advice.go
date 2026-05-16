package voxgigunsolicitedadvicesdk

import (
	"github.com/voxgig-sdk/unsolicited-advice-sdk/core"
	"github.com/voxgig-sdk/unsolicited-advice-sdk/entity"
	"github.com/voxgig-sdk/unsolicited-advice-sdk/feature"
	_ "github.com/voxgig-sdk/unsolicited-advice-sdk/utility"
)

// Type aliases preserve external API.
type UnsolicitedAdviceSDK = core.UnsolicitedAdviceSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type UnsolicitedAdviceEntity = core.UnsolicitedAdviceEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type UnsolicitedAdviceError = core.UnsolicitedAdviceError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAdviceEntityFunc = func(client *core.UnsolicitedAdviceSDK, entopts map[string]any) core.UnsolicitedAdviceEntity {
		return entity.NewAdviceEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewUnsolicitedAdviceSDK = core.NewUnsolicitedAdviceSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
