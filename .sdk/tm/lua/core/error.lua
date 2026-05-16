-- UnsolicitedAdvice SDK error

local UnsolicitedAdviceError = {}
UnsolicitedAdviceError.__index = UnsolicitedAdviceError


function UnsolicitedAdviceError.new(code, msg, ctx)
  local self = setmetatable({}, UnsolicitedAdviceError)
  self.is_sdk_error = true
  self.sdk = "UnsolicitedAdvice"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function UnsolicitedAdviceError:error()
  return self.msg
end


function UnsolicitedAdviceError:__tostring()
  return self.msg
end


return UnsolicitedAdviceError
