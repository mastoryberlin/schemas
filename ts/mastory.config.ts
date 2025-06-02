import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "$schema": {
      "type": "string"
    },
    "content": {
      "description": "Content organization in local development.",
      "type": "object",
      "properties": {
        "useBlobStore": {
          "description": "Use the local NuxtHub blob store instead of directly accessing the file system.",
          "oneOf": [
            {
              "type": "boolean"
            },
            {
              "const": "fullRefresh"
            }
          ],
          "default": false
        },
        "scopeName": {
          "description": "The default content scope associated with the user in local development.",
          "type": "string",
          "default": "dev"
        },
        "folders": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "additionalScopes": {
          "description": "A key-value map where keys denote additional scopes that the local dev user should have access to, and values are lists of string denoting the local folders from which that scope should be populated, similarly to the `folders` property is used to populate the default scope.",
          "type": "object",
          "propertyNames": {
            "pattern": "^\\w+$"
          },
          "additionalProperties": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "ignoreHidden": {
          "description": "Treat local files and folders starting with . as hidden, e.g. ignore them in queries.",
          "type": "boolean",
          "default": true
        }
      },
      "additionalProperties": false
    },
    "offlineMode": {
      "type": "boolean",
      "description": "Play content without a working network connection. Setting this to `true` will disable the 'You are offline' hint so you can develop locally as usual."
    },
    "skipTermsOfUse": {
      "type": "boolean",
      "description": "Skip the initial 'Terms of Use' dialog popup."
    },
    "skipOnboarding": {
      "type": "boolean",
      "description": "Skip the onboarding flow for new users."
    },
    "devTools": {
      "type": "object",
      "description": "Settings for the Mastory page in Nuxt Dev Tools.",
      "properties": {
        "liveMode": {
          "description": "Update game state in real-time?",
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean",
              "description": "Activate real-time game state updates. Disable this setting when the dev tools page slows down the app too much."
            },
            "updateInterval": {
              "description": "The maximal update interval in milliseconds. Increase this value to improve performance.",
              "type": "number",
              "default": 50
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "ttsEnabled": {
      "type": "boolean",
      "description": "Enable/disable Text-to-Speech in local development."
    }
  },
  "additionalProperties": false
} as const satisfies JSONSchema