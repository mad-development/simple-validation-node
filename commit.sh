#!/bin/bash

read -p "Enter commit message prefix (fix or feat): " PREFIX
read -p "Enter commit message suffix: " SUFFIX

COMMIT_MSG="$PREFIX: $SUFFIX"
VERSION=$(node -p "require('./package.json').version")

echo "$COMMIT_MSG" > commit_message.txt

git add .
git commit -F commit_message.txt
rm commit_message.txt

if [ "$PREFIX" = "fix" ]; then
  npm version patch
elif [ "$PREFIX" = "feat" ]; then
  npm version minor
else
  echo "Invalid prefix. Version not updated."
fi
