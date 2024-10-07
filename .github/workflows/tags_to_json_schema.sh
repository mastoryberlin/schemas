#!/bin/bash

# Check if a folder path is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <folder_path>"
    exit 1
fi

folder_path="$1"
output_file="$folder_path/tags_schema.json"

# Function to process a file
process_file() {
    # Remove full-line comments, inline comments, and empty lines
    sed 's/\s*#.*$//g' "$1" | grep -v '^$'
}

# Find all files recursively and process them
tags=$(find "$folder_path" -type f | while read -r file; do
    process_file "$file"
done | sort -u | jq -R -s 'split("\n") | map(select(length > 0))')

# Create the JSON schema for a list of tags
jq -n --argjson tags "$tags" '{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "string",
    "enum": $tags
  },
  "uniqueItems": true
}' > "$output_file"

echo "JSON schema has been written to $output_file"
