import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { User } from "./Routes/User.js";

const App = express();
App.use(express.json());
dotenv.config();
const PORT = process.env.PORT_NUMBER || 5000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

//initilizing & Connecting to the database
async function main() {
  try {
    let res = await mongoose.connect(MONGO_DB_URL);
    console.log("DB IS CONNECTED");
  } catch (error) {
    console.log("error", error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();
//running server

App.use("/api/user", User);

App.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
});
// console.log("PORT----", PORT);
