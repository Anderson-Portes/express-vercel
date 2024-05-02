const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");

const app = express();

app.use(bodyParser.json());
app.use("/api/users", usersRouter);

app.listen(3000, () => console.log("Server is running on port 3000."));

module.exports = app;
