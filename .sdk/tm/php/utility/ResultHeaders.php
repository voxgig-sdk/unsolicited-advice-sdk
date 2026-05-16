<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK utility: result_headers

class UnsolicitedAdviceResultHeaders
{
    public static function call(UnsolicitedAdviceContext $ctx): ?UnsolicitedAdviceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
