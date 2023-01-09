deploy() {
local commitMsg=$(readData "What is your commit message to git?")
buildClient
git add .
git commit -m "$commitMsg"
git push origin master
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
EOF
)
ssh $SERVER_ALIAS "$script" 
}