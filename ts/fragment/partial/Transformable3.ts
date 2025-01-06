import type { JSONSchema } from 'json-schema-to-ts'

export default {
  "properties": {
    "currentPosition": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "number"
      },
      "default": [
        0,
        0,
        0
      ]
    },
    "currentRotation": {
      "type": "array",
      "minItems": 3,
      "maxItems": 4,
      "items": {
        "type": "number"
      },
      "default": [
        0,
        0,
        0,
        0
      ]
    },
    "currentScale": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "number"
      },
      "default": [
        0,
        0,
        0
      ]
    },
    "targetPosition": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "number"
      },
      "default": [
        0,
        0,
        0
      ]
    },
    "targetRotation": {
      "type": "array",
      "minItems": 3,
      "maxItems": 4,
      "items": {
        "type": "number"
      },
      "default": [
        0,
        0,
        0,
        0
      ]
    },
    "targetScale": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "number"
      },
      "default": [
        0,
        0,
        0
      ]
    },
    "animationSpeed": {
      "type": "number",
      "default": 1
    }
  },
  "required": []
} as const satisfies JSONSchema