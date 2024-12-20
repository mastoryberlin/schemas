import type { JSONSchema } from "json-schema-to-ts";
import cameraPreset from './camera-preset'
import identifier from "../../core/identifier";
import color from "../../core/color";

export default {
  "properties": {
    "src": {
      "type": "string",
      "examples": [
        "https://storage.googleapis.com/mastory-content/test-ue-export/Nick's%20Room/SM_MERGED_Nicks_Room.gltf"
      ]
    },
    "groundName": {
      /**
       * The name of a Babylon mesh which will be considered the scene ground.
       * This must be set in order to enable fragment placement within the
       * camera's reach.
       */
      "type": "string"
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
                /**
                 * Select one of the presets to define a baseline of camera properties.
                 * Setting other properties explicitly overrides preset defaults.
                 */
                "preset": {
                  "$ref": "./camera-preset.json"
                } as unknown as typeof cameraPreset,
                /**
                 * The type of the camera. Choose "ArcRotateCamera" to rotate the camera
                 * around a single, displayed object; and "UniversalCamera"
                 * in all other cases.
                 */
                "type": {
                  "type": "string",
                  "enum": [
                    "ArcRotateCamera",
                    "UniversalCamera"
                  ]
                },
                /**
                 * Enable WASD and arrow keys to control the camera position.
                 */
                "allowWalk": {
                  "type": "boolean"
                },
                /**
                 * The near clipping plane. This value should be as high as
                 * possible – only decrease it if you need to render more
                 * objects very close to the camera.
                 */
                "nearPlane": {
                  "type": "number"
                },
                /**
                 * The far clipping plane. This value should be as low as
                 * possible – only increase it if you need to render more
                 * objects far away from the camera.
                 */
                "farPlane": {
                  "type": "number"
                },
                "fieldOfView": {
                  "type": "number"
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
                /**
                 * NOT YET IMPLEMENTED!
                 */
                "rotation": {
                  "type": "array",
                  "items": {
                    "type": "number"
                  },
                  "minItems": 3,
                  "maxItems": 4,
                  "default": [
                    0,
                    0,
                    0,
                    0
                  ]
                },
                /**
                 * A target point where the camera is looking at.
                 */
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
                /**
                 * Only for "type": "ArcRotateCamera": 
                 * The constant distance between the camera and the target point.
                 */
                "radius": {
                  "type": "number"
                },
                /**
                 * If "type": "UniversalCamera", the speed at which the camera
                 * (i.e. the player) moves on user input.
                 * 
                 * If "type": "ArcRotateCamera", a nonzero speed will enable
                 * auto-rotation around the target; use negative speeds to 
                 * change the rotation direction.
                 */
                "speed": {
                  "type": "number"
                },
                /**
                 * Apply gravity to the camera's position.
                 */
                "gravity": {
                  "type": "boolean"
                },
                /**
                 * Check for collisions with the camera a.k.a. player.
                 * More precisely, if this is true, a player-sized ellipsoid 
                 * will be assumed around the camera against which collision
                 * with other scene nodes will be detected.
                 */
                "collisionChecks": {
                  "type": "boolean"
                },
                /**
                 * Apply post-processing filters to the camera picture.
                 */
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
                /**
                 * Bind unit variables to standard camera properties –
                 * either to individual numeric values 
                 * or to entire vectors, e.g. `position` and `rotation`.
                 */
                "model": {
                  "type": "object",
                  "properties": {
                    /**
                     * The current camera position as an object with
                     * `x`, `y`, and `z` properties.
                     * */
                    "position": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The `x` value of the current camera position.
                     */
                    "positionX": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The `y` value of the current camera position.
                     */
                    "positionY": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The `z` value of the current camera position.
                     */
                    "positionZ": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The current camera rotation as an object with
                     * `x`, `y`, and `z` properties (Euler angles).
                     * */
                    "rotation": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * NOT YET IMPLEMENTED!
                     * 
                     * The current camera rotation as a 4-element
                     * array representing a quaternion.
                     * 
                     * Prefer this value if you intend to copy
                     * the same rotation onto other objects 
                     * or combine (chain) it with other rotations.
                     * */
                    "rotationQuaternion": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The `x` value of the current camera rotation
                     * (the "pitch" Euler angle).
                     */
                    "rotationX": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The `y` value of the current camera rotation
                     * (the "yaw" Euler angle).
                     */
                    "rotationY": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The `z` value of the current camera rotation
                     * (the "roll" Euler angle).
                     */
                    "rotationZ": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The reverse `x` value of the current camera rotation
                     * (the negative "pitch" Euler angle).
                     */
                    "rotationXReverse": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The reverse `y` value of the current camera rotation
                     * (the negative "yaw" Euler angle).
                     */
                    "rotationYReverse": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier,
                    /**
                     * The reverse `z` value of the current camera rotation
                     * (the negative "roll" Euler angle).
                     */
                    "rotationZReverse": {
                      "$ref": "../../core/identifier.json"
                    } as unknown as typeof identifier
                  },
                  "additionalProperties": false
                }
              },
              "additionalProperties": false
            }
          ]
        }
      }
    },
    "activeCamera": {
      "type": "string",
      "pattern": "^\\w+$"
    },
    "fog": {
      "oneOf": [
        {
          "type": "boolean"
        },
        {
          "type": "object",
          "properties": {
            "mode": {
              "enum": [
                "linear",
                "exp",
                "exp2"
              ]
            },
            "color": {
              "$ref": "../../core/color.json"
            } as unknown as typeof color,
            "start": {
              "type": "number"
            },
            "end": {
              "type": "number"
            },
            "density": {
              "type": "number"
            }
          }
        }
      ]
    },
    "areas": {
      "type": "object",
      "patternProperties": {
        "^\\w+$": {
          "type": "array",
          "items": {
            "type": "array",
            "minItems": 2,
            "maxItems": 3,
            "items": {
              "type": "number"
            }
          }
        }
      }
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