import type { JSONSchema } from "json-schema-to-ts";
import identifier from './identifier'

export default {
  "properties": {
    "activeMap": {
      /**
       * The currently selected coordinates map.
       * 
       * Must be set to one of the keys of the "maps"
       * object, or "pixels".
       * 
       * If set, all coordinate values got or set for the canvas
       * will be translated back and forth between
       * pixel coordinates and the coordinate units
       * defined by the selected map.
       * 
       * In the default case of "pixels" (or the empty string),
       * no coordinates will be transformed so
       * coordinates are pixel values.
       */
      "type": "string"
    },
    "defaultMapForChildren": {
      /**
       * The default coordinates map for children of this canvas.
       * 
       * Must be set to one of the keys of the "maps"
       * object, or "pixels".
       * 
       * The currently used coordinates map can be overridden
       * for each child by setting its "activeMap" property.
       * 
       * Defaults to the value of the canvas's own "activeMap" property.
       */
      "type": "string"
    },
    "maps": {
      /**
       * All supported coordinates maps for this canvas.
       * 
       * A coordinate map is a pair of 3x3 matrices, one the inverse
       * of the other, to transform between the canvas's default pixel coordinates
       * and any consistent Euklidean coordinate system that they supposedly
       * represent in the game. Depending on the value of "activeMap",
       * all coordinate values got or set for the canvas itself or any of its children
       * will be translated back and forth between pixel coordinates and the coordinate units
       * defined by that map.
       * 
       * To define a new map, choose a key containing its name or ID, and assign it a value
       * that defines the coordinate transformations to happen whenever the map is active.
       * Currently, the only supported ways
       * to define the coordinate transformation are by providing one of the two
       * matrices directly, or the coordinates of 3 points in both systems (pixel and mapped).
       */
      "type": "object",
      "additionalProperties": {
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "fromMatrix": {
                /**
                 * Define the coordinates map through a 3x3 matrix that describes
                 * either the pixels-to-custom or custom-to-pixels transformation.
                 */
                "type": "object",
                "properties": {
                  "matrix": {
                    /**
                     * The 3x3 matrix describing the coordinates transformation
                     * which "direction" indicates.
                     */
                    "type": "array",
                    "minItems": 9,
                    "maxItems": 9,
                    "items": {
                      "type": "number"
                    }
                  },
                  "direction": {
                    /**
                     * Whether the given "matrix" should be interpreted as
                     * describing the pixels-to-custom or the custom-to-pixels transformation.
                     */
                    "enum": [
                      "pixels to custom",
                      "custom to pixels"
                    ]
                  }
                },
                "required": ["matrix", "direction"],
                "additionalProperties": false
              },
              "unit": {
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "short": {
                        "type": "string"
                      },
                      "long": {
                        "type": "string"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              }
            },
            "required": [
              "fromMatrix"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "fromPoints": {
                "type": "object",
                "properties": {
                  "pixels": {
                    /**
                     * A list of 3 points given in pixels coordinates.
                     * Each point may be given either as a 2-item [x, y] array
                     * or as an object with "x" and "y" properties,
                     * allowing for the map to depend on parametrized points or 2-tuples.
                     */
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": {
                      "oneOf": [
                        {
                          "type": "array",
                          "minItems": 2,
                          "maxItems": 2,
                          "items": {
                            "type": "number"
                          }
                        },
                        {
                          "type": "object",
                          "properties": {
                            "x": {
                              "type": "number"
                            },
                            "y": {
                              "type": "number"
                            }
                          },
                          "required": ["x", "y"],
                          "additionalProperties": false
                        },
                      ]
                    }
                  },
                  "custom": {
                    /**
                     * A list of 3 points given in custom coordinates.
                     * Each point may be given either as a 2-item [x, y] array
                     * or as an object with "x" and "y" properties,
                     * allowing for the map to depend on parametrized points or 2-tuples.
                     */
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": {
                      "oneOf": [
                        {
                          "type": "array",
                          "minItems": 2,
                          "maxItems": 2,
                          "items": {
                            "type": "number"
                          }
                        },
                        {
                          "type": "object",
                          "properties": {
                            "x": {
                              "type": "number"
                            },
                            "y": {
                              "type": "number"
                            }
                          },
                          "required": ["x", "y"],
                          "additionalProperties": false
                        }
                      ]
                    }
                  }
                },
                "required": ["pixels", "custom"],
                "additionalProperties": false
              },
              "unit": {
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "short": {
                        "type": "string"
                      },
                      "long": {
                        "type": "string"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              }
            },
            "required": [
              "fromPoints"
            ],
            "additionalProperties": false
          }
        ]
      }
    },
    "activeTool": {
      /**
       * The currently selected Canvas tool.
       * 
       * This must be the ID of a Tool which is also a direct child of the Canvas.
       */
      "$ref": "./identifier.json"
    } as unknown as typeof identifier,
    "zoom": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "zoomSpeed": {
      "type": "number",
      "minimum": 0,
      "maximum": 100
    },
    "pan": {
      "type": "object",
      "properties": {
        "x": {
          "type": "number"
        },
        "y": {
          "type": "number"
        }
      },
      "additionalProperties": false
    },
    "allow": {
      "type": "object",
      "properties": {
        "zoom": {
          "oneOf": [
            {
              "type": "boolean"
            },
            {
              "type": "array",
              "items": [
                {
                  "type": "number"
                },
                {
                  "type": "number"
                }
              ],
              "minItems": 2,
              "maxItems": 2
            }
          ]
        },
        "pan": {
          "oneOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string",
              "enum": [
                "x",
                "y"
              ]
            },
            {
              "type": "object",
              "properties": {
                "x": {
                  "oneOf": [
                    {
                      "type": "boolean"
                    },
                    {
                      "type": "array",
                      "items": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "number"
                        }
                      ],
                      "minItems": 2,
                      "maxItems": 2
                    }
                  ]
                },
                "y": {
                  "oneOf": [
                    {
                      "type": "boolean"
                    },
                    {
                      "type": "array",
                      "items": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "number"
                        }
                      ],
                      "minItems": 2,
                      "maxItems": 2
                    }
                  ]
                }
              },
              "additionalProperties": false
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": []
} as const satisfies JSONSchema