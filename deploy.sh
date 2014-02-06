echo "enter a commit message: "
read commit_message
echo $commit_message
grunt
git add --all .
git commit -m "$commit message"
git push



