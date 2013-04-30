
# Node modules backup
cp -R node_modules ../backup_node_modules/.

# Generated documentation backup
cp -R docs/. ../docs-templates

# Checkout the gh-pages branch and push the changes
git checkout gh-pages
rm -fr ./*
cp -R ../docs-templates/. .
rm -fr ../docs-templates
git add .
git commit -m "gh-pages documentation automatic updated"
git push origin

# Checkout to the master branch
git checkout master

# Restore node modules
mv ../backup_node_modules/node_modules .
rm -fr ../backup_node_modules