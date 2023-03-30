#!/bin/bash

docker exec dockerizednextdjango_db_1 pg_dump devdb -U devuser > ./db_backups/db_backup_from_local_$(date +%Y-%m-%d_%H-%M-%S).sql