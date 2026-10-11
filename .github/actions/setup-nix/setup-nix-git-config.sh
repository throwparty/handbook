#!/usr/bin/env bash
set -euo pipefail

main() {
  local value
  for value in "git+ssh://git@github.com/" "ssh://git@github.com/" "git@github.com:"; do
    git config --global --get-all url."https://github.com/".insteadOf | grep -qxF "$value" ||
      git config --global --add url."https://github.com/".insteadOf "$value"
  done
  git config --global --get-all url."https://github.com/".insteadOf
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
