//node modules
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Where the file will be created (in the same folder as this script)
const FILE_NAME = path.join(__dirname, "sample.txt");

/**
 * Prompts the user for a question and returns the answer as a Promise.
 * This lets us use async/await with readline.
 */
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  console.log("=== Node.js File Manager ===\n");

  // Ask user for filename and content
  const fileName = await ask("Enter file name (default: sample.txt): ");
  const content  = await ask("Enter content to write: ");

  const targetFile = path.join(__dirname, fileName.trim() || "sample.txt");

  //  Create / overwrite the file
  fs.writeFileSync(targetFile, content);
  console.log(`\n File "${fileName}" created successfully.`);

  //  Read the file and display its contents
  const readContent = fs.readFileSync(targetFile, "utf-8");
  console.log("\n File contents after writing:");
  console.log(readContent);

  // Append additional content
  const extra = await ask("\nEnter extra content to append: ");
  fs.appendFileSync(targetFile, "\n" + extra);
  console.log(" Extra content appended.");

  //  Show final contents
  const finalContent = fs.readFileSync(targetFile, "utf-8");
  console.log("\nFinal file contents:");
  console.log(finalContent);

  rl.close();
}

main();