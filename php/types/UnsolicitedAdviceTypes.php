<?php
declare(strict_types=1);

// Typed models for the UnsolicitedAdvice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Advice entity data model. */
class Advice
{
    public string $advice;
    public int $id;
    public string $source;
}

/** Request payload for Advice#load. */
class AdviceLoadMatch
{
    public int $id;
}

/** Request payload for Advice#list. */
class AdviceListMatch
{
    public ?string $advice = null;
    public ?int $id = null;
    public ?string $source = null;
}

