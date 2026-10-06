// 01_setup_insert.js
// Creates collegeDB, the students collection, and inserts sample records.
// Run: mongosh --file 01_setup_insert.js

use("collegeDB");

// Start clean so the script can be re-run safely
db.students.drop();
db.createCollection("students");

// Insert one document
db.students.insertOne({
  rollNo: "23CM001",
  name: "Ravi Kumar",
  branch: "CSE-AIML",
  year: 3,
  marks: 85,
  email: "ravi@example.com"
});

// Insert many documents
db.students.insertMany([
  { rollNo: "23CM002", name: "Sneha Reddy",   branch: "CSE-AIML", year: 3, marks: 92, email: "sneha@example.com" },
  { rollNo: "23CM003", name: "Arjun Varma",   branch: "CSE",      year: 2, marks: 68, email: "arjun@example.com" },
  { rollNo: "23CM004", name: "Priya Sharma",  branch: "ECE",      year: 4, marks: 74, email: "priya@example.com" },
  { rollNo: "23CM005", name: "Karthik Rao",   branch: "CSE",      year: 3, marks: 45, email: "karthik@example.com" },
  { rollNo: "23CM006", name: "Divya Teja",    branch: "IT",       year: 2, marks: 81, email: "divya@example.com" },
  { rollNo: "23CM007", name: "Manoj Kumar",   branch: "ECE",      year: 1, marks: 39, email: "manoj@example.com" },
  { rollNo: "23CM008", name: "Anitha Devi",   branch: "CSE-AIML", year: 4, marks: 77, email: "anitha@example.com" },
  { rollNo: "23CM009", name: "Rahul Verma",   branch: "IT",       year: 3, marks: 58, email: "rahul@example.com" },
  { rollNo: "23CM010", name: "Lakshmi Prasad",branch: "CSE",      year: 1, marks: 88, email: "lakshmi@example.com" }
]);

print("Total students inserted: " + db.students.countDocuments());
