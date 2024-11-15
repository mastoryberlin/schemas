import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "src": {
      "type": "string",
      "examples": [
        "https://storage.googleapis.com/mastory-content/images/myImage.png"
      ],
      "default": "https://storage.googleapis.com/mastory-content/images/"
    },
    "size": {
      "type": "string",
      "examples": [
        "cover",
        "contain",
        "50% 50%",
        "250px 400px"
      ],
      "default": "contain"
    },
    "position": {
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "array",
          "minItems": 2,
          "maxItems": 2,
          "items": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ]
          }
        }],
      "examples": [
        "center",
        [213, -60],
        "213px -60px",
        "calc(50% - 40px) calc(50% + 86px)"
      ],
      "default": [0, 0]
    },
    "repeat": {
      "type": "string",
      "default": "no-repeat"
    }
  },
  "required": [
    "src"
  ]
} as const satisfies JSONSchema