require("dotenv/config");

import { MongoClient } from "mongodb";

const DB_NAME = "Teddy";
const MONGO_DB_URL = process.env.MONGO_WEB || `mongodb://localhost:27017/${DB_NAME}`;
let connection: MongoClient;

export const getCollection = async (collectionName: string) => {
  connection =
    connection ||
    (await MongoClient.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }));
  return connection.db(DB_NAME).collection(collectionName);
};
