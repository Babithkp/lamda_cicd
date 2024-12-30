import express from "express";
import serverless from "serverless-http";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

export const handler = serverless(app);
