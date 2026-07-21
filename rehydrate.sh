#!/usr/bin/env bash
set -e

print_job_result() {
    # Capture the exact exit code of the last executed command
    local exit_code=$?
    
    if [ "$exit_code" -eq 130 ]; then 
        echo -e "\nrehydration aborted"
    elif [ "$exit_code" -ne 0 ]; then
        echo -e "\nrehydration failed"
    else 
        echo -e "\nrehydration completed!"
    fi
}

trap print_job_result EXIT
trap 'exit 130' INT

npm ci
npm run test
npm run build

