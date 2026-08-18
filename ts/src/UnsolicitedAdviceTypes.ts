// Typed models for the UnsolicitedAdvice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Advice {
  advice: string
  id: number
  source: string
}

export interface AdviceLoadMatch {
  id: number
}

export interface AdviceListMatch {
  advice?: string
  id?: number
  source?: string

  // Selects a custom action instead of the plain list:
  //   'all'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

