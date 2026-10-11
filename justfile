mod nix "nix"
mod workflows ".github/workflows"

set shell := ["bash", "-eux", "-o", "pipefail", "-c"]

default: list

list:
    just --list

fmt:
    treefmt

lint:
    just nix lint
    just workflows lint

test:
    just workflows test

build:
    yarn build
