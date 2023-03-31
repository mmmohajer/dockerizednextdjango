#!/bin/bash

docker exec web_db_1 psql -U devuser -c "DROP DATABASE devdb"
docker exec web_db_1 psql -U devuser -d devdb -f ./db_backups/db_backup_from_local_2023-03-30_17-52-34.sql