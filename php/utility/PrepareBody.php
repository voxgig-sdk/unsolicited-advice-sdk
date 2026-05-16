<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK utility: prepare_body

class UnsolicitedAdvicePrepareBody
{
    public static function call(UnsolicitedAdviceContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
