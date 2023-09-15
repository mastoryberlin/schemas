import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "allOf": [
        {
            "properties": {
                "class": {
                    "const": "Room"
                },
                "dimensions": {
                    "type": "array"
                },
                "wallpapers": {
                    "type": "array"
                }
            }
        }
    ],
    "unevaluatedProperties": false,
    "required": [
        "class"
    ]
} as const satisfies JSONSchema

export type Room = FromSchema<typeof schema>