<?php
declare(strict_types=1);

// UnsolicitedAdvice SDK base feature

class UnsolicitedAdviceBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(UnsolicitedAdviceContext $ctx, array $options): void {}
    public function PostConstruct(UnsolicitedAdviceContext $ctx): void {}
    public function PostConstructEntity(UnsolicitedAdviceContext $ctx): void {}
    public function SetData(UnsolicitedAdviceContext $ctx): void {}
    public function GetData(UnsolicitedAdviceContext $ctx): void {}
    public function GetMatch(UnsolicitedAdviceContext $ctx): void {}
    public function SetMatch(UnsolicitedAdviceContext $ctx): void {}
    public function PrePoint(UnsolicitedAdviceContext $ctx): void {}
    public function PreSpec(UnsolicitedAdviceContext $ctx): void {}
    public function PreRequest(UnsolicitedAdviceContext $ctx): void {}
    public function PreResponse(UnsolicitedAdviceContext $ctx): void {}
    public function PreResult(UnsolicitedAdviceContext $ctx): void {}
    public function PreDone(UnsolicitedAdviceContext $ctx): void {}
    public function PreUnexpected(UnsolicitedAdviceContext $ctx): void {}
}
