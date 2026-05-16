<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

UnsolicitedAdviceUtility::setRegistrar(function (UnsolicitedAdviceUtility $u): void {
    $u->clean = [UnsolicitedAdviceClean::class, 'call'];
    $u->done = [UnsolicitedAdviceDone::class, 'call'];
    $u->make_error = [UnsolicitedAdviceMakeError::class, 'call'];
    $u->feature_add = [UnsolicitedAdviceFeatureAdd::class, 'call'];
    $u->feature_hook = [UnsolicitedAdviceFeatureHook::class, 'call'];
    $u->feature_init = [UnsolicitedAdviceFeatureInit::class, 'call'];
    $u->fetcher = [UnsolicitedAdviceFetcher::class, 'call'];
    $u->make_fetch_def = [UnsolicitedAdviceMakeFetchDef::class, 'call'];
    $u->make_context = [UnsolicitedAdviceMakeContext::class, 'call'];
    $u->make_options = [UnsolicitedAdviceMakeOptions::class, 'call'];
    $u->make_request = [UnsolicitedAdviceMakeRequest::class, 'call'];
    $u->make_response = [UnsolicitedAdviceMakeResponse::class, 'call'];
    $u->make_result = [UnsolicitedAdviceMakeResult::class, 'call'];
    $u->make_point = [UnsolicitedAdviceMakePoint::class, 'call'];
    $u->make_spec = [UnsolicitedAdviceMakeSpec::class, 'call'];
    $u->make_url = [UnsolicitedAdviceMakeUrl::class, 'call'];
    $u->param = [UnsolicitedAdviceParam::class, 'call'];
    $u->prepare_auth = [UnsolicitedAdvicePrepareAuth::class, 'call'];
    $u->prepare_body = [UnsolicitedAdvicePrepareBody::class, 'call'];
    $u->prepare_headers = [UnsolicitedAdvicePrepareHeaders::class, 'call'];
    $u->prepare_method = [UnsolicitedAdvicePrepareMethod::class, 'call'];
    $u->prepare_params = [UnsolicitedAdvicePrepareParams::class, 'call'];
    $u->prepare_path = [UnsolicitedAdvicePreparePath::class, 'call'];
    $u->prepare_query = [UnsolicitedAdvicePrepareQuery::class, 'call'];
    $u->result_basic = [UnsolicitedAdviceResultBasic::class, 'call'];
    $u->result_body = [UnsolicitedAdviceResultBody::class, 'call'];
    $u->result_headers = [UnsolicitedAdviceResultHeaders::class, 'call'];
    $u->transform_request = [UnsolicitedAdviceTransformRequest::class, 'call'];
    $u->transform_response = [UnsolicitedAdviceTransformResponse::class, 'call'];
});
