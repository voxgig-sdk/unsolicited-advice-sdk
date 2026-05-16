<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK utility: result_body

class UnsolicitedAdviceResultBody
{
    public static function call(UnsolicitedAdviceContext $ctx): ?UnsolicitedAdviceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
