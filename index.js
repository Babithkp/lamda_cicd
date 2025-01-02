import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/getUser",async (req,res)=>{
  const user = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(user.data);
  res.send(user.data);
})


export const handler = serverless(app);
