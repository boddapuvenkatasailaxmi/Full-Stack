// 03_update_delete.js
// Update and delete operations.
// Run: mongosh --file 03_update_delete.js

use("collegeDB");

print("\n--- Update marks of 23CM001 to 90 ---");
printjson(db.students.updateOne({ rollNo: "23CM001" }, { $set: { marks: 90 } }));
printjson(db.students.findOne({ rollNo: "23CM001" }));

print("\n--- Update email of 23CM003 ---");
printjson(db.students.updateOne(
  { rollNo: "23CM003" },
  { $set: { email: "arjun.varma@college.edu" } }
));
printjson(db.students.findOne({ rollNo: "23CM003" }));

print("\n--- Update branch of 23CM009 ---");
printjson(db.students.updateOne({ rollNo: "23CM009" }, { $set: { branch: "CSE" } }));
printjson(db.students.findOne({ rollNo: "23CM009" }));

print("\n--- Bonus: add 5 marks to all year-1 students ---");
printjson(db.students.updateMany({ year: 1 }, { $inc: { marks: 5 } }));

print("\n--- Delete student with rollNo 23CM007 ---");
printjson(db.students.deleteOne({ rollNo: "23CM007" }));
print("Remaining students: " + db.students.countDocuments());
