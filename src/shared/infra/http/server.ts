import express from "express";

const app = express();

app.use(express.json());

const port = 3333;

app.get("/", (_req, res) => res.send("Teddy Soluções"));

app.listen(port, () =>
  console.log(`Back-end started on localhost:${port}! 🚀`)
);
