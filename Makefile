# Variables
PACKAGE_JSON := package.json
VERSION := $(shell node -p "require('./$(PACKAGE_JSON)').version")
COMMIT_MSG := "Auto commit"

# Rule to commit files with a custom message and increase version
.PHONY: commit
commit:
	./commit.sh
