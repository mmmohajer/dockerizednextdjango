#!/bin/bash

docker exec app_db_1 pg_dump db -U mmmohajer70 > /var/www/app/db_backups/db_backup_$(date +%Y-%m-%d_%H-%M-%S).sql

echo "Create a log"
echo "Successfuly made a bckup from db on: $(date)" >> /home/mmmohajer70/cron_commands.log