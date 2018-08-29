#!/bin/bash
set -o errexit

git config --global user.email "nobody@nobody.org"
git config --global user.name "Travis CI"

cd public

git init
git add .
git commit -m "Deploy to Github Pages"
git push --force "git@github.com:${TRAVIS_REPO_SLUG}.git" master:master
