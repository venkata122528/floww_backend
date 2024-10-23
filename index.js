const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

let db = null;
const dbPath = path.join(__dirname, "flowAI.db");
const app = express();

const initializeDataBaseServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => {
      console.log("Server is running on port number 3000");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use(express.json());

initializeDataBaseServer();

app.post("/transactions/", async (request, response) => {
  const getBody = request.body;
  console.log(getBody);
  //{ type, category, amount, date, description, name }
  //console.log(type, category, amount, date, description, name);
});
