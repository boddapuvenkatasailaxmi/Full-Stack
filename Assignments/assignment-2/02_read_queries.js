// 02_read_queries.js
// Display / filter / search operations.
// Run: mongosh --file 02_read_queries.js

use("collegeDB");

print("\n--- 1. Display all students ---");
printjson(db.students.find().toArray());

print("\n--- 2. Students of branch CSE-AIML ---");
printjson(db.students.find({ branch: "CSE-AIML" }).toArray());

print("\n--- 3. Students who scored more than 75 ---");
printjson(db.students.find({ marks: { $gt: 75 } }).toArray());

print("\n--- 4. Search student by rollNo (23CM001) ---");
printjson(db.students.findOne({ rollNo: "23CM001" }));

print("\n--- 5a. Search by condition: marks between 60 and 80 ---");
printjson(db.students.find({ marks: { $gte: 60, $lte: 80 } }).toArray());

print("\n--- 5b. Search by condition: year = 3 ---");
printjson(db.students.find({ year: 3 }).toArray());

print("\n--- 5c. Combined: year 3 AND marks > 70 ---");
printjson(db.students.find({ year: 3, marks: { $gt: 70 } }).toArray());
