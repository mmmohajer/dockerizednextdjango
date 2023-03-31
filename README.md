Setup:

1. Setup Development environment: <br>

   - Clone the repository <br>

   - SETUP ON MAC/Linux:

   1. Got to **root folder** and run `./automation.sh` in terminal<br>
   2. Choose Option `1` --> `Make initial setup on Mac/Linux`<br>
   3. Go to nginx folder and run --> `htpasswd -c htpasswd user` <br>
      Choose `password` as the password of this user

   - SETUP ON WINDOWS:

   1. Create a python virtual env: `python -m venv venv` <br>
   2. Activate virtual environment --> `venv\Scripts\activate` <br>

   - `pip install --upgrade pip` <br>
   - `pip install -r api/requirements-windows-local.txt` <br>
   - Go to **api folder** and run `python manage.py collectstatic` <br>
   - Go to **client folder** and run `npm install` <br>
   - Go to **root folder** and run `./automation.sh` in terminal<br>
   - Choose Option `2` --> `Make initial setup on Windows`<br>
   - If usig docker, go to nginx folder and run --> `htpasswd -c htpasswd user` <br>
     Choose `password` as the password of this user

   Then, Do the following part, in ordet to be able to use docker in your development environment:

   1. Go to the **root folder** and run `docker-compose -f docker-compose-dev.yml up --build -d` <br>

**Note**:<br> You might need to change the database name and database password in **/api/config folder** and env variables inside **/config folder**.

**Note**: In order to use celery with your application put USE_CELERY=1 in the environment variables.

**Note**: In order to send activation email after registration, put SEND_ACTIVATION_EMAIL=1 in the environment variables.

**Note**: In order to run the application, without the docker, you need to take the following steps: <br>

1. Go to client folder and change the value of `WITHOUT_DOCKER` to `1` <br>
2. Active the python virtual env and install the following package: <br>
   `pip install python-dotenv`

**Note**: Remember for `deployment`, you need to change the value of `PRODUCTION` to true in `next.config.js` file <br>

<hr>

2. Test production environment on your local PC: <br>
   - `Run docker-compose -f docker-compose-prod.yml up -build -d`

<hr>

3. Test performance of production environment on your local PC: <br>
   - Run following commands:<br>
     `docker-compose -f docker-compose-prod.yml up -build -d` <br>
     `cd api` <br>
     `locust -f locustfiles/browse_api.py`

<hr>

4. Setup Production environment: <br>

   - Create the following subfolders: <br>
     ./api/vol/static/ <br>
     ./api/vol/media/ <br>
     ./api/vol/static/app_static_files <br>
     ./api/vol/media/pdfs <br>
   - Go to **root folder** and run `./automation.sh` in terminal<br>
   - Choose Option `7` --> `Copy environment variables in server`<br>
   - Then you need to add ssl config to your domain, so take the following steps: <br>

   1. Create following subfolders: <br>

   - ./nginx/certbot/conf/ <br>
   - ./nginx/certbot/www/ <br> 2.`docker-compose -f docker-compose-createSSL.yml up --build -d` <br>
     3.And then change domains and email in **init-letsencrypt.sh** <br>
     4.Then run `./init-letsencrypt.sh` <br>

   - Now your app is ready to be run on server:
     To do so, first clear all volumes, images, and containersof docker, useing the following 3 commands: <br>

   1. Run `docker container rm -f $(docker container ls -a -q)` <br>
   2. Run `docker image rm -f $(docker image ls -a -q)` <br>
   3. Run `docker volume prune` <br>

   - Now everything is ready for your app to be served: <br>
     Run `docker-compose -f docker-compose-prod-ssl.yml up --build -d` <br>

To create a backup of the db <br>
Go to the file `utils/shellScripting/funcs/db_backup_local.sh` <br>
Change the docker container name, db name and db user based on the current project, then run: <br>
`./automation.sh` <br>
Select number 9

In order to restore db from a backedup file, <br>
`./automation.sh` <br>
Then select number 10

Run ngrok: <br>
ngrok http -hostname=makeclient.ngrok.io 80 <br>
OR <br>
ngrok http -host-header=makeclient.ngrok.io 80 <br>
