// 04_sort_index.js
// Sorting, indexing, and a demo of why indexes speed up searches.
// Run: mongosh --file 04_sort_index.js

use("collegeDB");

print("\n--- Students in descending order of marks ---");
printjson(db.students.find({}, { _id: 0, rollNo: 1, name: 1, marks: 1 }).sort({ marks: -1 }).toArray());

// ---- Indexing demo ----
// Add 20,000 dummy students so the difference is measurable.
print("\nInserting 20,000 dummy records for the indexing demo...");
db.students.dropIndexes();   // remove any index (keeps the default _id index)

const branches = ["CSE", "CSE-AIML", "ECE", "IT", "EEE", "MECH"];
const dummy = [];
for (let i = 1; i <= 20000; i++) {
  dummy.push({
    rollNo: "TEST" + String(i).padStart(5, "0"),
    name: "Dummy " + i,
    branch: branches[i % branches.length],
    year: (i % 4) + 1,
    marks: i % 101,
    email: "dummy" + i + "@example.com"
  });
}
db.students.insertMany(dummy);

const target = "TEST19999";

print("\n--- BEFORE index: searching rollNo = " + target + " ---");
let before = db.students.find({ rollNo: target }).explain("executionStats").executionStats;
print("Stage            : " + (before.executionStages.stage));
print("Docs examined    : " + before.totalDocsExamined);
print("Time (ms)        : " + before.executionTimeMillis);

print("\n--- Creating unique index on rollNo ---");
print(db.students.createIndex({ rollNo: 1 }, { unique: true }));

print("\n--- AFTER index: searching rollNo = " + target + " ---");
let after = db.students.find({ rollNo: target }).explain("executionStats").executionStats;
const stage = after.executionStages.inputStage ? after.executionStages.inputStage.stage : after.executionStages.stage;
print("Stage            : " + stage);
print("Docs examined    : " + after.totalDocsExamined);
print("Time (ms)        : " + after.executionTimeMillis);

print("\nConclusion: without the index MongoDB does a COLLSCAN (reads every document);");
print("with the index it does an IXSCAN and examines only 1 document.");

print("\nAll indexes:");
printjson(db.students.getIndexes());

// Clean up dummy data
printjson(db.students.deleteMany({ rollNo: /^TEST/ }));
print("Students remaining after cleanup: " + db.students.countDocuments());
