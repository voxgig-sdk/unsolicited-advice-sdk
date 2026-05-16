<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK utility: feature_add

class UnsolicitedAdviceFeatureAdd
{
    public static function call(UnsolicitedAdviceContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
