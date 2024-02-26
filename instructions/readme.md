Initial Server Hardening: <br>
Login to the server with `root` user <br>
`ssh root@IP_ADDRESS` <br>
**Change root user password** <br>
`passwd` <br>
**Add a new user** <br>
`adduser USER_NAME` <br>
**Add `root` user priviledges to the new nonroot user** <br>

1. `visudo` --> To open the editable file <br>
2. Add `USER_NAME ALL=(ALL:ALL) ALL` --> under root user oriviledges <br>
   **Prevent `root` user login** <br>
3. `cd /etc/ssh/` <br>
4. `cp sshd_config sshd_config.bak` --> Create a backup file <br>
5. `nano sshd_config` <br>
6. Change `PermitRootLogin no` --> Initially it is set to yes <br>
7. Exit the file (ctrl + x) and then `systemctl restart ssh` <br>
   **Login as nonroot user**
   `ssh USERNAME@IP_ADDRESS` <br>
8. Remember that whenever you wanna to switch to the root user when logged in as nonroot user with sudo previledges you can type `sudo -s`
<hr>

Currently that non-root user login works good, we can setup public/private key
authentication to the system instead of password login. <br>

So, in your local system <br>
`mkdir .ssh` <br>
`cd .ssh` <br>

1. `ssh-keygen -t rsa -b 4096 -C "Comment for the file"` --> In order to create public and private keys <br>
2. Copy the public key file to your server:
   `scp .ssh/PUB_SSH_KEY_NAME.pub USER_NAME@IP_ADDRESS:/home/USER_NAME`
3. Login to the server with the usename credentials: <br>
   Inside the server: `mv PUB_SSH_KEY_NAME.pub authorized_keys` --> change the name of the pub key file in the server to authorized_keys
4. `mkdir .ssh` --> Create .ssh folder under user directory <br>
   `mv authorized_keys .ssh/` --> Move the authorized_keys file to .ssh folder <br>
5. `chmod 600 authorized_keys` --> Change the of authorized_keys file, so only user can read/write that <br>
6. `sudo chattr +i authorized_keys` --> Prevent authorized_keys deletion <br>
7. `chmod 700 .ssh/` --> Change mode of .ssh folder, so only user can read, wite, and execute the .ssh folfer <br>
8. `cd /etc/ssh` <br>
9. `sudo nano sshd_config` --> Open sshd_condig file and make the following changes: <br>
   `PubkeyAuthentication yes` <br>
   `AuthorizedKeysFile %h/.ssh/authorized_keys .ssh/authorized_keys2` <br>
   `PasswordAuthentication no` <br>

10. `sudo systemctl restart ssh

11. So, you can test login to the server using ssh keys as follows: <br>
    `ssh -i .ssh/PRIVATE_SSH_KEY_NAME USERNAME@IP_ADDRESS`

<hr>

Create an alias in your local system for simpler anfd more optimized login to the server, So in your local machine: <br>
`nano .ssh/config` --> Open config file and set relevant configuration, like: <br>
`Host iswad_website` <br>
`Hostname 155.138.151.125` <br>
`User mmmohajer70` <br>
`IdentityFile /Users/mohammadmohajer/Desktop/SoftwareDevelopment/ISWADdockerizedReactDjango/.ssh/iswad_web_rsa` <br>
`ServerAliveInterval 60` <br>
`ServerAliveCountMax 120` <br>

Then, you can simply login with the following command: <br>
`ssh alias to login`

<hr>

**Perform updating and upgrading in your server** <br>
`sudo apt update` <br>
`sudo apt upgrade` <br>
`sudo apt autoremove` <br>

**Add firewall rules to the server** <br>
`sudo apt install ufw` --> Installs firewall <br>
`sudo ufw status verbose` --> Check current firewall rules <br>
`sudo ufw default deny incoming` --> Deny all incoming requests<br>
`sudo ufw default allow outgoing` --> Accept all outgoing requests <br>
`sudo ufw allow ssh` --> Open ssh port or `sudp ufw allow 22` <br>
`sudo ufw allow http` --> Open http port or `sudp ufw allow 80` <br>
`sudo ufw allow https` --> Open https port or `sudp ufw allow 443` <br>
For our app: <br>
`sudo ufw allow 5432` --> DB port<br>
`sudo ufw enable` --> Enable all firewall rules <br>
`sudo reboot` --> Reboot the server <br>

<hr>

**Install fail2ban** <br>
`sudo apt update` <br>
`sudo apt install fail2ban` <br>
`cd /etc/fail2ban` <br>
`sudo cp jail.conf jail.local` <br>
`sudo nano jail.local` <br>
Make the following changes: <br>
`bantime = 604800s` <br>
`findtime = 10800s` <br>
`maxretry = 2` <br>

`sudo systemctl restart fail2ban` <br>

To see logs of fail2ban: <br>
`cd /var/log` <br>
`sudo cat fail2ban.log` <br>

If for any reason your lical IP address is banned in your server, you need to use browser console of your server and type the following: <br>
`fail2ban-client set sshd unbanip IP_ADDRESS` <br>

**Install docker on your server** <br>
Instructions here: https://docs.docker.com/engine/install/ubuntu/ <br>

**Install docker-compose in the server** <br>
Instructions comes from here: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04 <br>

`sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/bin/docker-compose` <br>
`sudo chmod +x /usr/bin/docker-compose` <br>
`docker-compose --version` <br>

**Add your username to the docker group** <br>
So, you can run docker commands without the need of sudo <br>
`sudo groupadd docker` <br>
`sudo usermod -aG docker USER_NAME` <br>
`newgrp docker` <br>
`docker run hello-world` --> check if it works <br>

**Set git config**
`sudo git config --global user.email "OWNER_OF_GITHUB_REPO_EMAIL"` <br>
`git config --global user.email "OWNER_OF_GITHUB_REPO_EMAIL"` <br>

Build a new pair of ssh keys for github access <br>
`ssh-keygen -t rsa -b 4096 -C "Comment for the file"` <br>
Remember do not set a passphrase for the file. <br>
Copy the private key somewhere to your server (.ssh folder) <br>
Add the public key to the github account <br>
Add the following part to .ssh/config file in the server<br>

`User GIT_USER_NAME` <br>
`Hostname github.com` <br>
`IdentityFile PATH_TO_KEY_FILE (Ex: ~/.ssh/github_rsa)` <br>

**Clone the repo to server**
`cd /var` <br>
`mkdir www` <br>
`cd www` <br>
`mkdir app` <br>
In order to change the owner of folder app and all its subfolders: <br>
`chown -R USERNAME:GROUPNAME /PATH/TO/FILE`<br>
Here we have: <br>
`sudo chown USERNAME:USERNAME /var/www/app`
`cd app` <br>
`git clone SSH_REPO_URL .` <br>

**Run Application**
Create the following subfolders: <br>
`./api/vol/static/` <br>
`./api/vol/media/` <br>
Copy all the environment variables in server: <br>
`./automation.sh` --> 7 <br>
Run `nano .env` --> change .env variables <br>
Update the following files <br>

- `.env`
- `config/envFiles/django/prod/.env`
- `config/envFiles/postgres/prod/.env`
- `client/next.config.js`
- `redis/redis.conf`
- `init-letsencrypt.sh`
- `use_backup_db.sh`
- `backup_db.sh` <br>
- `reset_docker.sh` <br>

Change DB_NAME, DB_USER in backup_db.sh, USER_NAME, domains in init-letsencrypt.sh <br>
Run `sudo chmod +x ./init-letsencrypt.sh`, `sudo chmod +x ./backup_db.sh`, `sudo chmod +x ./use_backup_db.sh`, `sudo chmod +x ./redeploy.sh`, `sudo chmod +x ./reset_docker.sh` <br>
Also change the redis password in `redis/redis.conf` file. Seach for `requirepass` and then determine the password for it. Also, in django env variables, you must set the exact same value for `REDIS_USER_PASS` <br>
Then run `sudo apt-get install apache2-utils` <br>
Then go to folder nginx <br>
`cd nginx` <br>
and run <br>  
`htpasswd -c htpasswd CELERY_FLOWER_USER` <br>
Then use `CELERY_FLOWER_PASSWORD` you defined in the env variables. <br>
Then you need to add ssl config to your domain, so take the following steps: <br>

Create following subfolders: <br>
`./nginx/certbot/conf/` <br>
`./nginx/certbot/www/` <br>
`docker-compose -f docker-compose-createSSL.yml up --build -d` <br>
Add A records to the DNS settings of relevant domain pointing to the server IP address. <br>
**Note: www also must be referring to the server ip address** <br>
And then change domains and email in `init-letsencrypt.sh` <br>
Then run `sudo ./init-letsencrypt.sh` <br>

Now your app must be ready on server <br>

In order to automatically create a backup of the database, you must run:
`sudo chown -R USERNAME:docker /var/www/app/db_backups`<br>

Go to the `/home/USER_NAME` folder and create a new folder called `db_backups` <br>

`sudo crontab -e`<br>
`0 1 * * * /var/www/app/backup_db.sh` <br>
`0 2 * * * /var/www/app/reset_docker.sh` <br>

Note that in order to restore a database you can use the following command:
`docker exec app_db_1 psql -U USER_NAME -d DB_NAME < BACKUP_FILE` <br>
Or you can update the USER_NAME and DB_NAME, and BACKUP_FILE in use_backup_db.sh to restore a database file. <br>

Just in order to automatic deploy go to the `utils/constants/constants.sh` and change the server alias <br>

Note that in order to remove backup files older than for example 7 days ago, you can use the following command: <br>
`find /path/to/folder -type f -mtime +7 -delete` <br>
To remove all empty folders inside a folder, you can type <br>
`find /path/to/folder -type d -empty -delete`

The following commands are to remove any backups and make the space free:
`docker image prune -a -f`
`docker container prune -f`
`docker volume prune -f`
`docker network prune -f`
`docker builder prune -a -f`

In order to show sth while the site is down for maintenance:

1. `sudo apt update`
   If there are some errors while updating: look at this url:
   https://www.digitalocean.com/community/questions/unable-to-update-getting-the-error-while-running-the-command-sudo-apt-update

It says what we can do is:
`sudo nano /etc/apt/sources.list`
Replace all instances of http://mirrors.digitalocean.com/ubuntu with http://old-releases.ubuntu.com/ubuntu

2. `sudo apt install nginx`
3. from your local statics/nginx/default.conf copy to /etc/nginx/DOMAIN.conf in the server.
4. RUn
   `sudo ln -s /etc/nginx/sites-available/DOMAIN.conf /etc/nginx/sites-enabled/`
5. Test Nginx configuration
   `sudo nginx -t`
6. Restart Nginx
   `sudo systemctl restart nginx`
   If get port conflicts, you need to remove and stop the running docker
7. In order to be able to start and stop nginx without prompting for password as a sudo command, Use the visudo command to edit the sudoers file:
   `sudo visudo`
   Add the following lines to the sudoers
   `USER_NAME ALL=(ALL) NOPASSWD: /bin/systemctl start nginx`
   `USER_NAME ALL=(ALL) NOPASSWD: /bin/systemctl stop nginx`
   Then everything is fine
