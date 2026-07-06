# frozen_string_literal: true

# Typed models for the UnsolicitedAdvice SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Advice entity data model.
#
# @!attribute [rw] advice
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] source
#   @return [String]
Advice = Struct.new(
  :advice,
  :id,
  :source,
  keyword_init: true
)

# Request payload for Advice#load.
#
# @!attribute [rw] id
#   @return [Integer]
AdviceLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Advice#list.
#
# @!attribute [rw] advice
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
AdviceListMatch = Struct.new(
  :advice,
  :id,
  :source,
  keyword_init: true
)

