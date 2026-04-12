#!/bin/bash
# Deploy Family Capital to live
# Usage: bash deploy-fc.sh "commit message"

SOURCE="C:/Users/ianco/source/repos/Websites/family-capital"
DEPLOY="C:/Users/ianco/source/repos/familycapital-deploy"
MSG="${1:-Deploy update}"

echo "Syncing files..."
rsync -av --delete --exclude='.git' "$SOURCE/" "$DEPLOY/"

echo "familycapital.co.uk" > "$DEPLOY/CNAME"

cd "$DEPLOY"
git add -A
git commit -m "$MSG"
git push

echo "Deployed to familycapital.co.uk"
