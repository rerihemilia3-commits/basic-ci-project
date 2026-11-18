
const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });

fs.writeFileSync(
  "dist/index.html",
  "<h1>Quality Gate project</h1>"
);

console.log("Build completed successfully!");
