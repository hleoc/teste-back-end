require("dotenv/config");
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO_WEB;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err: any) => {
  const collection = client.db(process.env.MONGO_DB_DATABASE).collection("users");
  client.close();
});
