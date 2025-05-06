const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Testing:3zyFn0ZtejbEfgm1@cluster0.oxtaw.mongodb.net/TabloRegisterUsers?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connect MongoDb successfully");
    return client.db(); // default db gəlir
  } catch (error) {
    console.error("Error Mongo Db Connect:", error);
  }
}

module.exports = connectDB;
