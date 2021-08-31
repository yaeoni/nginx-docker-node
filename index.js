const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Test!~");
});

app
  .listen(8000, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: 8000 🛡️
      ################################################
    `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
