import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "allOf": [
    {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "id": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
},
    "model": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*(?:\\[[0-9]+\\])*$"
},
    "onlyInStates": {
      "title": "A string array of state names of the nearest parent state machine. If non-empty, limits this fragment's lifetime to when one of those states is active.",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "default": []
    }
  }
},
    {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "statechart": {
      "title": "A statechart describing the internal states of this fragment.",
      "type": "object",
      "properties": {
        "initial": {
          "type": "string"
        },
        "states": {
          "type": "object"
        }
      },
      "default": {}
    },
    "flow": {
      "title": "The file name of a flow (with or without the .flow extension) which will be used to define the internal states of this fragment.",
      "type": "string",
      "pattern": "^[a-zA-Z0-9_-]+(\\.flow)?$",
      "default": "MyFlowFile.flow"
    },
    "dynamicFlowSwitch": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
}
  }
},
    {
      "properties": {
        "class": {
          "type": "null"
        },
        "context": {
          "type": "object"
        },
        "components": {
          "type": "array",
          "items": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/content/component.json",
  "title": "Component Reference",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "props": {
      "type": "object"
    },
    "bind": {
      "type": "object"
    }
  }
}
        },
        "wrapperComponents": {
          "type": "array",
          "items": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/content/component.json",
  "title": "Component Reference",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "props": {
      "type": "object"
    },
    "bind": {
      "type": "object"
    }
  }
}
        },
        "babylon": {
          "type": "object"
        },
        "listen": {
          "title": "The standard events which this class listens to from its associated DOM or 3D objects, as an array of strings. Conventionally, event names must be in UPPER_CASE letters.",
          "type": "array",
          "items": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[A-Z_1-9]+$"
},
          "default": []
        }
      }
    }
  ],
  "unevaluatedProperties": false
} as const satisfies JSONSchema

export type Base = FromSchema<typeof schema>