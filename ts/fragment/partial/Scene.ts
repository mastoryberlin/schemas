import type { JSONSchema } from "json-schema-to-ts";
import cameraPreset from './camera-preset'

export default {
  "properties": {
    "src": {
      "type": "string",
      "examples": [
        "https://storage.googleapis.com/mastory-content/test-ue-export/Nick's%20Room/SM_MERGED_Nicks_Room.gltf"
      ]
    },
    "clearColor": {
      "type": "array",
      "default": [
        0,
        0,
        0,
        0
      ]
    },
    "cameras": {
      "type": "object",
      "patternProperties": {
        "^\\w+$": {
          "oneOf": [
            {
              "$ref": "./camera-preset.json"
            } as unknown as typeof cameraPreset,
            {
              "type": "object",
              "properties": {
                "preset": {
                  "$ref": "./camera-preset.json"
                } as unknown as typeof cameraPreset,
                "type": {
                  "type": "string",
                  "enum": [
                    "UniversalCamera"
                  ]
                },
                "allowWalk": {
                  "type": "boolean"
                },
                "position": {
                  "type": "array",
                  "items": {
                    "type": "number"
                  },
                  "minItems": 3,
                  "maxItems": 3,
                  "default": [
                    0,
                    0,
                    0
                  ]
                },
                "target": {
                  "type": "array",
                  "items": {
                    "type": "number"
                  },
                  "minItems": 3,
                  "maxItems": 3,
                  "default": [
                    0,
                    0,
                    1
                  ]
                },
                "gravity": {
                  "type": "boolean"
                },
                "collisionChecks": {
                  "type": "boolean"
                }
              }
            }
          ]
        }
      }
    },
    "activeCamera": {
      "type": "string",
      "pattern": "^\\w+$"
    },
    "environmentTextureUrl": {
      "type": "string",
      "default": ""
    },
    "enviromentLightIntensity": {
      "type": "number",
      "default": 1
    },
    "enableToneMapping": {
      "type": "boolean",
      "default": false
    },
    "contrast": {
      "type": "number",
      "default": 1
    },
    "exposure": {
      "type": "number",
      "default": 1
    }
  },
  "required": []
} as const satisfies JSONSchema