package = "voxgig-sdk-unsolicited-advice"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/unsolicited-advice-sdk.git"
}
description = {
  summary = "UnsolicitedAdvice SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["unsolicited-advice_sdk"] = "unsolicited-advice_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
