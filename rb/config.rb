# UnsolicitedAdvice SDK configuration

module UnsolicitedAdviceConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "UnsolicitedAdvice",
        "slug" => "unsolicited-advice",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "name" => "advice",
              "req" => true,
              "short" => "The unsolicited advice text from Kevin Kelly",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "req" => true,
              "short" => "The unique identifier for the advice",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "source",
              "req" => true,
              "short" => "The URL source of the advice",
              "type" => "`$STRING`",
            },
          ],
          "name" => "advice",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
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
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 7,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
              ],
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
