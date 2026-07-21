#!/usr/bin/env bash
set -e

print_job_result() {
    # Capture the exact exit code of the last executed command
    local exit_code=$?
    
    if [ "$exit_code" -eq 130 ]; then 
        echo -e "\ninstall aborted"
    elif [ "$exit_code" -ne 0 ]; then
        echo -e "\ninstall failed"
    else 
        echo -e "\ninstall completed!"
    fi
}

trap print_job_result EXIT
trap 'exit 130' INT

RELEASE_BRANCH=${1:-main}

git fetch
git checkout $RELEASE_BRANCH
git pull

npm ci
npm run test
npm run build
