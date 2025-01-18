#!/bin/bash
set -eux

# run tests
npm run test

# git config
git config --global user.name 'github-actions[bot]'
git config --global user.email 'github-actions[bot]@users.noreply.github.com'

# variables
export APP_NAME=rmg-components
BRANCH=$(git branch | grep \* | cut -d ' ' -f2 | tr '/' '.')

# npm config
export NODE_OPTIONS=--openssl-legacy-provider
npm config set tag-version-prefix "${APP_NAME}-"

### BUMP VERSION
if [ "$BRANCH" = "main" ]
then
  # build with a normal version
  npm version $BUMP_VERSION -m "${APP_NAME}-%s release" --force || { echo "Release Error"; exit 1; }
  export RMG_VER=$(node -p "require('./package.json').version")
else
  # build with a hashed version
  VERSION=$(node -p "require('./package.json').version")
  GITHASH=$(git log -n 1 --pretty=%h)
  export RMG_VER="$VERSION.$BRANCH.$GITHASH"
  # git tag -a "${APP_NAME}-${RMG_VER}" -m "${APP_NAME}-${RMG_VER}"
fi

### BUILD
CI='' npm run build

### PUSH TAG AND COMMIT
if [ "$BRANCH" = "main" ]
then
  git push --atomic origin HEAD "${APP_NAME}-${RMG_VER}"
fi

echo "Build Success: $APP_NAME-$RMG_VER"
echo "RMG_VER=$RMG_VER" >> $GITHUB_OUTPUT

# Set up .npmrc for publishing
cat >> ./.npmrc << EOF
//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
EOF
