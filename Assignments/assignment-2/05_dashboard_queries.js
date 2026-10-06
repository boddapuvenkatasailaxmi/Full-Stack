// 05_dashboard_queries.js
// Real-Time Extension: dashboard queries.
// Run: mongosh --file 05_dashboard_queries.js

use("collegeDB");

print("\n=== STUDENT DASHBOARD ===");

print("\n[1] Students scoring above 80");
printjson(db.students.find({ marks: { $gt: 80 } }, { _id: 0, rollNo: 1, name: 1, marks: 1 }).toArray());

print("\n[2] Students scoring below 50");
printjson(db.students.find({ marks: { $lt: 50 } }, { _id: 0, rollNo: 1, name: 1, marks: 1 }).toArray());

print("\n[3] Highest-scoring student");
printjson(db.students.find({}, { _id: 0 }).sort({ marks: -1 }).limit(1).toArray());

print("\n[4] Students of branch CSE-AIML");
printjson(db.students.find({ branch: "CSE-AIML" }, { _id: 0, rollNo: 1, name: 1, marks: 1 }).toArray());

print("\n[5] Students sorted by marks (high to low)");
printjson(db.students.find({}, { _id: 0, rollNo: 1, name: 1, marks: 1 }).sort({ marks: -1 }).toArray());

print("\n[Extra] Branch-wise summary (count, average, max)");
printjson(db.students.aggregate([
  { $group: { _id: "$branch", students: { $sum: 1 }, avgMarks: { $avg: "$marks" }, maxMarks: { $max: "$marks" } } },
  { $sort: { avgMarks: -1 } }
]).toArray());
