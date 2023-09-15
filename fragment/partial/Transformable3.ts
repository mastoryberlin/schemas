import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
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
} as const satisfies JSONSchema

export type Transformable3 = FromSchema<typeof schema>