const unzipper = require("unzipper");
const fs = require('fs');

fs.createReadStream("students.zip")
  .pipe(unzipper.Extract({ path: "dist" }))
  .on("close", () => {
    console.log("Files unzipped successfully");
  });

