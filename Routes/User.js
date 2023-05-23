import express from "express";
const User = express.Router();

User.get("/", (req, res) => res.send({ success: "Api is running " }));

User.get("/token", (req, res) => res.send({ success: "Token" })).post(
  "/",
  (req, res) => res.send({ success: "Token added" })
);

export { User };
