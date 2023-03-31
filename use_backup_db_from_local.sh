#!/bin/bash

docker exec dockerizednextdjango_db_1 psql -U devuser -d devdb -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
docker exec dockerizednextdjango_db_1 psql -U devuser -d devdb -f ./db_backups/db_backup_from_local_2023-03-30_17-52-34.sql