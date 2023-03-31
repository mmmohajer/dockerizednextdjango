makeBackupOfDb() {
    local backupFileName=$(readData "What is backup filename  (without.sql)?")
    local addr="db_backups/$backupFileName.sql"
    docker exec dockerizednextdjango_db_1 pg_dump devdb -U devuser > $addr
    echo "Backup file is ready"
}

restoreDb() {
    local restoreFileName=$(readData "What is restore filename (without.sql)?")
    local addr="db_backups/$restoreFileName.sql"
    docker exec dockerizednextdjango_db_1 psql -U devuser -d devdb -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
    docker exec dockerizednextdjango_db_1 psql -U devuser -d devdb -f $addr
    echo "DB succsessfully restored"
}