#!/usr/bin/env bash
set -euo pipefail

for file in "$@"; do
  just --justfile "$file" --fmt
done
