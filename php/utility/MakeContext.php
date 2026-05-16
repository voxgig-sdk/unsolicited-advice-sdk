<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class UnsolicitedAdviceMakeContext
{
    public static function call(array $ctxmap, ?UnsolicitedAdviceContext $basectx): UnsolicitedAdviceContext
    {
        return new UnsolicitedAdviceContext($ctxmap, $basectx);
    }
}
