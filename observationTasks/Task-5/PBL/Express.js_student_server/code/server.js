// server.js — Basic Express server with /students and /about routes
const express = require("express");
const app = express();
const PORT = 3000;

// ---------- Sample data ----------
const students = [
  { id: 1, name: "Sai laxmi",  branch: "CSE",  year: 3 },
  { id: 2, name: "Pranathi",   branch: "IT",   year: 3 },
  { id: 3, name: "Manaswini",  branch: "ECE",  year: 1 },
  { id: 4, name: "Vanisree",   branch: "CSE",  year: 4 },
  { id: 5, name: "Amrutha",    branch: "MECH", year: 2 }
];

// ---------- Routes ----------

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Student Server! Visit /students or /about.");
});

// /students — returns the list of students as JSON
app.get("/students", (req, res) => {
  res.json(students);
});

// /about — returns information about the app
app.get("/about", (req, res) => {
  res.json({
    app: "Student Server",
    version: "1.0.0",
    author: "Sai Laxmi",
    description: "A basic Express.js REST-style server demo."
  });
});

// ---------- Start server with a clean banner ----------
app.listen(PORT, () => {
  console.log("==============================================");
  console.log(`EXPRESS.JS STUDENT SERVER RUNNING ON PORT ${PORT}`);
  console.log(`Root URL  : http://localhost:${PORT}/`);
  console.log(`Students  : http://localhost:${PORT}/students`);
  console.log(`About URL : http://localhost:${PORT}/about`);
  console.log("==============================================");
});