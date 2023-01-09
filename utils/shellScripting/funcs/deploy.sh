deploy() {
local commitMsg=$(readData "What is your commit message to git?")
buildClient
git add .
git commit -m "$commitMsg"
git push origin master
eval "$(ssh-agent -s)"
ssh-add /Users/mohammadmohajer/Desktop/SoftwareDevelopment/personalprojects/myportfolio/web/.ssh/github_rsa
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
EOF
)
ssh $SERVER_ALIAS "$script" 
}