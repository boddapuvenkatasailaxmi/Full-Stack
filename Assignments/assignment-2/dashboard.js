// dashboard.js - Node.js version of the dashboard (uses the official MongoDB driver)
// Setup:  npm install      Run: node dashboard.js
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const students = client.db("collegeDB").collection("students");
    const proj = { projection: { _id: 0, rollNo: 1, name: 1, branch: 1, marks: 1 } };

    console.log("\n=== STUDENT DASHBOARD ===");

    console.log("\n[1] Scoring above 80");
    console.table(await students.find({ marks: { $gt: 80 } }, proj).toArray());

    console.log("\n[2] Scoring below 50");
    console.table(await students.find({ marks: { $lt: 50 } }, proj).toArray());

    console.log("\n[3] Highest-scoring student");
    console.table(await students.find({}, proj).sort({ marks: -1 }).limit(1).toArray());

    console.log("\n[4] Branch CSE-AIML");
    console.table(await students.find({ branch: "CSE-AIML" }, proj).toArray());

    console.log("\n[5] Sorted by marks (descending)");
    console.table(await students.find({}, proj).sort({ marks: -1 }).toArray());

    console.log("\n[Extra] Branch-wise summary");
    console.table(await students.aggregate([
      { $group: { _id: "$branch", students: { $sum: 1 }, avgMarks: { $avg: "$marks" }, maxMarks: { $max: "$marks" } } },
      { $sort: { avgMarks: -1 } }
    ]).toArray());
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
  }
}

main();
