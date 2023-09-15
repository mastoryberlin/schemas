import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
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
} as const satisfies JSONSchema

export type Mesh = FromSchema<typeof schema>