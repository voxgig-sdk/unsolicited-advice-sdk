<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class UnsolicitedAdviceFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new UnsolicitedAdviceBaseFeature();
            case "test":
                return new UnsolicitedAdviceTestFeature();
            default:
                return new UnsolicitedAdviceBaseFeature();
        }
    }
}
