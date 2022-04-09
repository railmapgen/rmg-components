#!/bin/bash
set -eux

# run tests
npm run test:no-watch

# git config
git config --global user.name 'github-actions[bot]'
git config --global user.email 'github-actions[bot]@users.noreply.github.com'

# variables
export APP_NAME=rmg-components
BRANCH=$(git branch | grep \* | cut -d ' ' -f2 | tr '/' '.')
UAT_REPO_NAME=rmg-repositories

# npm config
npm config set tag-version-prefix "${APP_NAME}-"

### BUMP VERSION
if [ "$BRANCH" = "master" ]
then
  # build with a normal version
  npm version patch -m "${APP_NAME}-%s release" --force || { echo "Release Error"; exit 1; }
  export RMG_VER=$(node -p "require('./package.json').version")
else
  # build with a hashed version
  VERSION=$(node -p "require('./package.json').version")
  GITHASH=$(git log -n 1 --pretty=%h)
  export RMG_VER="$VERSION.$BRANCH.$GITHASH"
  # git tag -a "${APP_NAME}-${RMG_VER}" -m "${APP_NAME}-${RMG_VER}"
fi


### BUILD
mkdir -p $UAT_REPO_NAME/"$APP_NAME"/

CI='' npm run build
cp -r storybook-static/ $UAT_REPO_NAME/"$APP_NAME"/"$RMG_VER"/

### PUSH TAG AND COMMIT
if [ "$BRANCH" = "master" ]
then
  git push --atomic origin HEAD "${APP_NAME}-${RMG_VER}"
fi

### UPLOAD ARTIFACTS
cd $UAT_REPO_NAME/
git add .
git commit -m "Build version $APP_NAME-$RMG_VER"
git push --force


echo "Build Success: $APP_NAME-$RMG_VER"
echo "::set-output name=RMG_VER::$RMG_VER"

# Set up .npmrc for publishing
cd ../
cat >> ./.npmrc << EOF
//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
EOF
