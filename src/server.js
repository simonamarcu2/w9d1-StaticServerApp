const express = require("express");
const app = express();
const port = 5001;

//static is the route path, public is the parent folder for the static files
app.use("/static", express.static("public"));

// run the express app with this function
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
