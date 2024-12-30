import express from "express"
import serverless from "serverless-http"
const app = express()

app.use(express.json())

app.get("/hello", (req, res) => {
  res.send("Hello World!")
})

export const handler = serverless(app);