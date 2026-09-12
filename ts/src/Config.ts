
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'UnsolicitedAdvice',
        slug: "unsolicited-advice",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://kk-advice.koyeb.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      advice: {
      },

    }
  }


  entity = {
    "advice": {
      "fields": [
        {
          "name": "advice",
          "req": true,
          "short": "The unsolicited advice text from Kevin Kelly",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the advice",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "source",
          "req": true,
          "short": "The URL source of the advice",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "advice",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/advice/all",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "advice"
                },
                {
                  "lit": "all"
                }
              ],
              "select": {
                "$action": "all"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "advice",
                "all"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": 7,
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/advice/{id}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "advice"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "advice",
                "{id}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/advice",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "advice"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "advice"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

