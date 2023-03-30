#!/bin/bash

docker exec dockerizednextdjango_db_1 psql -U devuser -d devdb < ./db_backups/db_backup_from_local_2023-03-30_17-52-34.sql
