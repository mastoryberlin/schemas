#!/bin/bash

sed -n '
  # If not start of comment, print line as-is and continue
  /\/\*\*/!{
    p
    b
  }
  # Found start of comment - begin collecting
  {
    # Clear hold space and put first line there
    h
    # Read next line
    n
    # While we have not reached end of comment
    :collect
    /\*\//!{
      # Append line to hold space
      H
      # Get next line and continue collecting
      n
      b collect
    }
    # We found the end - append it too
    H
    # Get everything from hold space
    g
    # Now transform the entire block:
    # 1. Remove /** and */
    s/\/\*\*[[:space:]]*\n//
    s/\n[[:space:]]*\*\///
    # 2. Remove leading asterisks and spaces from middle lines
    s/\n[[:space:]]*\*[[:space:]]*/ /g
    # 3. Trim spaces
    s/^[[:space:]]*\*\?[[:space:]]*\|[[:space:]]*$//
    # 4. Escape any existing double quotes
    s/"/\\"/g
    # 5. Format as description property
    s/.*/"description": "&",/
    # Print result
    p
    # Continue with next line
    b
  }
'