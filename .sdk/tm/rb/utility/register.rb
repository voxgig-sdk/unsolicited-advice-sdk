# UnsolicitedAdvice SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

UnsolicitedAdviceUtility.registrar = ->(u) {
  u.clean = UnsolicitedAdviceUtilities::Clean
  u.done = UnsolicitedAdviceUtilities::Done
  u.make_error = UnsolicitedAdviceUtilities::MakeError
  u.feature_add = UnsolicitedAdviceUtilities::FeatureAdd
  u.feature_hook = UnsolicitedAdviceUtilities::FeatureHook
  u.feature_init = UnsolicitedAdviceUtilities::FeatureInit
  u.fetcher = UnsolicitedAdviceUtilities::Fetcher
  u.make_fetch_def = UnsolicitedAdviceUtilities::MakeFetchDef
  u.make_context = UnsolicitedAdviceUtilities::MakeContext
  u.make_options = UnsolicitedAdviceUtilities::MakeOptions
  u.make_request = UnsolicitedAdviceUtilities::MakeRequest
  u.make_response = UnsolicitedAdviceUtilities::MakeResponse
  u.make_result = UnsolicitedAdviceUtilities::MakeResult
  u.make_point = UnsolicitedAdviceUtilities::MakePoint
  u.make_spec = UnsolicitedAdviceUtilities::MakeSpec
  u.make_url = UnsolicitedAdviceUtilities::MakeUrl
  u.param = UnsolicitedAdviceUtilities::Param
  u.prepare_auth = UnsolicitedAdviceUtilities::PrepareAuth
  u.prepare_body = UnsolicitedAdviceUtilities::PrepareBody
  u.prepare_headers = UnsolicitedAdviceUtilities::PrepareHeaders
  u.prepare_method = UnsolicitedAdviceUtilities::PrepareMethod
  u.prepare_params = UnsolicitedAdviceUtilities::PrepareParams
  u.prepare_path = UnsolicitedAdviceUtilities::PreparePath
  u.prepare_query = UnsolicitedAdviceUtilities::PrepareQuery
  u.result_basic = UnsolicitedAdviceUtilities::ResultBasic
  u.result_body = UnsolicitedAdviceUtilities::ResultBody
  u.result_headers = UnsolicitedAdviceUtilities::ResultHeaders
  u.transform_request = UnsolicitedAdviceUtilities::TransformRequest
  u.transform_response = UnsolicitedAdviceUtilities::TransformResponse
}
