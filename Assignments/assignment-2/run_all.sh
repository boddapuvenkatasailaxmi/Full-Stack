#!/bin/bash
# Runs every script in order with mongosh
for f in 01_setup_insert.js 02_read_queries.js 03_update_delete.js 04_sort_index.js 05_dashboard_queries.js; do
  echo "================ $f ================"
  mongosh --quiet --file "$f"
done
