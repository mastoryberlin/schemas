#!/bin/bash

# Check if the required arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_folder> <output_file>"
    exit 1
fi

input_folder="$1"
output_file="$2"

# Initialize an empty array to store the unique tags
declare -a tags=()

# Function to recursively process files in the input folder
process_files() {
    local dir="$1"
    for file in "$dir"/*; do
        if [ -d "$file" ]; then
            process_files "$file"
        elif [ -f "$file" ]; then
            # Extract non-comment lines from the file
            while IFS= read -r line; do
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
                    tags+=("$line")
                fi
            done < "$file"
        fi
    done
}

# Call the recursive function to process all files
process_files "$input_folder"

# Create a unique sorted set of tags (filtering out empty strings)
readarray -t sorted_tags < <(printf '%s\n' "${tags[@]}" | grep -v '^$' | sort -u)

# Generate the JSON schema with proper comma handling
schema='{\n  "$schema": "http://json-schema.org/draft-07/schema#",  "$comment": "DO NOT CHANGE THIS FILE MANUALLY AS IT WILL BE OVERWRITTEN BY A GITHUB ACTION. If you want to modify the list of tags, edit the files in (or add new files to) ts/content/tags instead!",\n  "type": "string",\n  "enum": ['

# Add the tags with proper comma separation
for i in "${!sorted_tags[@]}"; do
    schema+="\n    \"${sorted_tags[$i]}\""
    # Add comma only if it's not the last element
    if [ $i -lt $(( ${#sorted_tags[@]} - 1 )) ]; then
        schema+=","
    fi
done

schema+="\n  ]\n}"

# Write the schema to the output file
printf "$schema" > "$output_file"

echo "JSON schema written to: $output_file"