import type { JSONSchema } from "json-schema-to-ts";
import tagsList from './tags-list'

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "tags": {
      "$ref": "./tags-list.json"
    } as unknown as typeof tagsList,
    "icon": {
      "type": "string"
    },
    "thumbnail_url": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "title",
    "description",
    "tags"
  ]
} as const satisfies JSONSchema