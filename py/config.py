# UnsolicitedAdvice SDK configuration


def make_config():
    return {
        "main": {
            "name": "UnsolicitedAdvice",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://kk-advice.koyeb.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "advice": {},
            },
        },
        "entity": {
      "advice": {
        "fields": [
          {
            "active": True,
            "name": "advice",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "source",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "advice",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/api/advice/all",
                "parts": [
                  "api",
                  "advice",
                  "all",
                ],
                "select": {
                  "$action": "all",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 7,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/advice/{id}",
                "parts": [
                  "api",
                  "advice",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/api/advice",
                "parts": [
                  "api",
                  "advice",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
