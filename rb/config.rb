# UnsolicitedAdvice SDK configuration

module UnsolicitedAdviceConfig
  def self.make_config
    {
      "main" => {
        "name" => "UnsolicitedAdvice",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://kk-advice.koyeb.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "advice" => {},
        },
      },
      "entity" => {
        "advice" => {
          "fields" => [
            {
              "active" => true,
              "name" => "advice",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "id",
              "req" => true,
              "type" => "`$INTEGER`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "source",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
          ],
          "name" => "advice",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/api/advice/all",
                  "parts" => [
                    "api",
                    "advice",
                    "all",
                  ],
                  "select" => {
                    "$action" => "all",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => 7,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "index$" => 0,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/advice/{id}",
                  "parts" => [
                    "api",
                    "advice",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/api/advice",
                  "parts" => [
                    "api",
                    "advice",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    UnsolicitedAdviceFeatures.make_feature(name)
  end
end
