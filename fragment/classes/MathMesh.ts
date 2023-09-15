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
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
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
  "$schema": "http://json-schema.org/draft-07/schema#",
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
      "properties": {
        "name": {
          "type": "string"
        },
        "materialId": {
          "type": "string"
        },
        "hasVertexAlpha": {
          "type": "boolean",
          "default": false
        },
        "visibility": {
          "type": "number",
          "default": 1
        },
        "isVisible": {
          "type": "boolean",
          "default": false
        },
        "isEnabled": {
          "type": "boolean",
          "default": false
        },
        "checkCollisions": {
          "type": "boolean",
          "default": false
        },
        "billboardMode": {
          "type": "number",
          "default": 0
        },
        "receiveShadows": {
          "type": "boolean",
          "default": false
        }
      }
    }
  ]
},
    {
      "properties": {
        "class": {
          "const": "MathMesh"
        }
      }
    }
  ]
} as const satisfies JSONSchema

export type MathMesh = FromSchema<typeof schema>