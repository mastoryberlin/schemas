import type { JSONSchema } from "json-schema-to-ts";
import cameraPreset from './camera-preset'
import identifier from "../../core/identifier";

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
                },
                "postProcess": {
                  "type": "object",
                  "properties": {
                    "parameters": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "shaderUrl": {
                      "type": "string"
                    }
                  },
                  "additionalProperties": false
                },
                "model": {
                  "type": "object",
                  "properties": {
                    "position": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "positionX": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "positionY": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "positionZ": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "rotation": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "rotationX": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "rotationY": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "rotationZ": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "rotationXReverse": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "rotationYReverse": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    "rotationZReverse": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier
                  },
                  "additionalProperties": false
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