<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK exists test

require_once __DIR__ . '/../unsolicitedadvice_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = UnsolicitedAdviceSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
