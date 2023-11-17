import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "allOf": [
    {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "id": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
},
    "model": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*(?:\\[[0-9]+\\])*$"
},
    "onlyInStates": {
      "title": "A string array of state names of the nearest parent state machine. If non-empty, limits this fragment's lifetime to when one of those states is active.",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "default": []
    }
  }
},
    {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "statechart": {
      "title": "A statechart describing the internal states of this fragment.",
      "type": "object",
      "properties": {
        "initial": {
          "type": "string"
        },
        "states": {
          "type": "object"
        }
      },
      "default": {}
    },
    "flow": {
      "title": "The file name of a flow (with or without the .flow extension) which will be used to define the internal states of this fragment.",
      "type": "string",
      "pattern": "^[a-zA-Z0-9_-]+(\\.flow)?$",
      "default": "MyFlowFile.flow"
    },
    "dynamicFlowSwitch": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
}
  }
},
    {
      "properties": {
        "class": {
          "const": "Activity"
        },
        "uiElements": {
          "type": "array",
          "default": [],
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "type": {
                "type": "string"
              }
            },
            "required": [
              "type"
            ]
          }
        },
        "intendedEffectRadius": {
          "type": "array",
          "items": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "indicators": {
      "type": "object",
      "properties": {
        "initiatingCommunication": {
          "type": "boolean",
          "default": false
        },
        "expressingTheWishToStopCommunicating": {
          "type": "boolean",
          "default": false
        },
        "askingForFeedback": {
          "type": "boolean",
          "default": false
        },
        "exressingTheWishForMoreClarity": {
          "type": "boolean",
          "default": false
        },
        "askingForHelpWithSth": {
          "type": "boolean",
          "default": false
        },
        "expressingTheWishForABreak": {
          "type": "boolean",
          "default": false
        },
        "expressingTheWishToKeepAPromise": {
          "type": "boolean",
          "default": false
        }
      }
    },
    "demonstrates": {
      "$comment": "that the user who had this intent was driven by the wish for",
      "type": "object",
      "properties": {
        "conceptualUnderstanding": {
          "type": "object",
          "properties": {
            "concept": {
              "type": "string",
              "enum": [
                "Quantifying"
              ]
            },
            "score": {
              "type": "number",
              "minimum": 0,
              "maximum": 1
            }
          }
        },
        "formalAccuracy": {
          "type": "number",
          "minimum": 0,
          "maximum": 1
        },
        "clarity": {
          "type": "number",
          "minimum": 0,
          "maximum": 1
        },
        "needToDoActivity": {
          "type": "string"
        },
        "formalMistakeType": {
          "type": "string",
          "enum": []
        },
        "conceptualMistakeType": {
          "type": "string",
          "enum": []
        },
        "realWorldKnowledge": {
          "type": "string",
          "enum": []
        },
        "storyKnowledge": {
          "type": "string",
          "enum": []
        },
        "escapism": {
          "type": "boolean",
          "default": false
        },
        "achievement": {
          "type": "string",
          "enum": []
        },
        "affiliation": {
          "type": "boolean",
          "default": false
        },
        "affiliationNpcs": {
          "type": "string",
          "enum": []
        },
        "autonomy": {
          "type": "boolean",
          "default": false
        },
        "keepingAPromise": {
          "type": "boolean",
          "default": false
        },
        "creativity": {
          "type": "boolean",
          "default": false
        }
      }
    }
  }
}
        }
      }
    }
  ],
  "unevaluatedProperties": false,
  "required": [
    "class"
  ]
} as const satisfies JSONSchema

export type Activity = FromSchema<typeof schema>