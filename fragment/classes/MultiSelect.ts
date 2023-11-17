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
    "arrange": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "allOf": [
    {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "position": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "array",
  "items": {
    "type": "number"
  },
  "minItems": 3,
  "maxItems": 3
},
    "rotation": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "array",
  "items": {
    "type": "number"
  },
  "minItems": 3,
  "maxItems": 3
},
    "scaling": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "array",
  "items": {
    "type": "number"
  },
  "minItems": 3,
  "maxItems": 3
}
  }
},
    {
      "oneOf": [
        {
          "properties": {
            "shape": {
              "const": "circle"
            },
            "radius": {
              "type": "number",
              "exclusiveMinimum": 0
            }
          },
          "required": [
            "shape"
          ]
        }
      ]
    }
  ]
},
    "gizmo": {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "allowedInteractions": {
      "type": "object",
      "properties": {
        "translate": {
          "oneOf": [
            {
              "type": "boolean",
              "default": true
            },
            {
              "type": "object",
              "properties": {
                "alongXAxis": {
                  "type": "boolean",
                  "default": true
                },
                "alongYAxis": {
                  "type": "boolean",
                  "default": true
                },
                "alongZAxis": {
                  "type": "boolean",
                  "default": true
                }
              }
            }
          ]
        },
        "rotate": {
          "oneOf": [
            {
              "type": "boolean",
              "default": true
            },
            {
              "type": "object",
              "properties": {
                "aroundXAxis": {
                  "type": "boolean",
                  "default": true
                },
                "aroundYAxis": {
                  "type": "boolean",
                  "default": true
                },
                "aroundZAxis": {
                  "type": "boolean",
                  "default": true
                }
              }
            }
          ]
        },
        "scale": {
          "oneOf": [
            {
              "type": "boolean",
              "default": true
            },
            {
              "type": "object",
              "properties": {
                "inXDirection": {
                  "type": "boolean",
                  "default": true
                },
                "inYDirection": {
                  "type": "boolean",
                  "default": true
                },
                "inZDirection": {
                  "type": "boolean",
                  "default": true
                }
              }
            }
          ]
        }
      },
      "default": {
        "translate": false,
        "rotate": {
          "aroundYAxis": true
        },
        "scale": false
      }
    },
    "distanceThreshold": {
      "type": "number",
      "default": 2
    }
  }
}
  }
},
    {
      "properties": {
        "class": {
          "const": "MultiSelect"
        }
      }
    }
  ],
  "unevaluatedProperties": false,
  "required": [
    "class"
  ]
} as const satisfies JSONSchema

export type MultiSelect = FromSchema<typeof schema>