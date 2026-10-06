# Assignment 2 - MongoDB Student Management (collegeDB)

## Requirements
- MongoDB running locally (`mongod`) and `mongosh` installed
- Node.js (only for the optional `dashboard.js`)

## Files (run in this order)
| File | What it does |
|------|--------------|
| `01_setup_insert.js` | Creates `collegeDB` / `students`, inserts 10 students |
| `02_read_queries.js` | Display all, by branch, marks > 75, search by rollNo, condition searches |
| `03_update_delete.js` | Update marks, update email/branch, delete by rollNo |
| `04_sort_index.js` | Sort by marks (desc), create index on rollNo, COLLSCAN vs IXSCAN demo |
| `05_dashboard_queries.js` | Real-time extension: dashboard queries |
| `dashboard.js` | Same dashboard using Node.js + MongoDB driver |
| `run_all.sh` | Runs scripts 01-05 in order |

## How to run
```bash
mongosh --file 01_setup_insert.js
mongosh --file 02_read_queries.js
mongosh --file 03_update_delete.js
mongosh --file 04_sort_index.js
mongosh --file 05_dashboard_queries.js

# optional Node.js dashboard
npm install
node dashboard.js
```
Or run everything: `./run_all.sh`
