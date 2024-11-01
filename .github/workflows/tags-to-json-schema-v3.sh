#!/bin/bash

# Check if the required arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_folder> <output_file>"
    exit 1
fi

input_folder="$1"
output_file="$2"

# Create a temporary file to store our tags
tmp_file=$(mktemp)

# Function to recursively process files in the input folder
process_files() {
    local dir="$1"
    for file in "$dir"/*; do
        if [ -d "$file" ]; then
            process_files "$file"
        elif [ -f "$file" ]; then
            # Read file content and append a newline to ensure last line is processed
            while IFS= read -r line || [ -n "$line" ]; do
                # Trim whitespace first
                line=$(echo "$line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
                # Skip empty lines or lines starting with # or //
                if [[ -z "$line" || "$line" =~ ^[#//] ]]; then
                    continue
                fi
                # Remove inline comments (starting with # or //) and trim whitespace again
                line=$(echo "$line" | sed 's/[[:space:]]*#.*$//;s/[[:space:]]*\/\/.*$//' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
                # Skip if line is now empty
                if [[ -n "$line" ]]; then
                    echo "$line" >> "$tmp_file"
                fi
            done < "$file"
        fi
    done
}

# Call the recursive function to process all files
process_files "$input_folder"

# Generate the JSON schema with proper comma handling
schema='{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$comment": "DO NOT CHANGE THIS FILE MANUALLY AS IT WILL BE OVERWRITTEN BY A GITHUB ACTION. If you want to modify the list of tags, edit the files in (or add new files to) ts/content/tags instead!",\n  "type": "string",\n  "enum": ['

# Sort unique entries and add them to the schema
first=true
while IFS= read -r tag; do
    if [ "$first" = true ]; then
        first=false
    else
        schema+=","
    fi
    schema+="\n    \"$tag\""
done < <(sort -u "$tmp_file")

schema+="\n  ]\n}"

# Write the schema to the output file
printf "$schema" > "$output_file"

# Write TS version of the schema
echo -e "import type { JSONSchema } from \"json-schema-to-ts\"\n\nexport default $schema as const satisfies JSONSchema" > ts/"${output_file/.json/.ts}"

# Clean up
rm "$tmp_file"

echo "JSON schema written to: $output_file"