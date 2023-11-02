const { ObjectId } = require('mongodb');

const {MongoClient} = require('mongodb');

//locolhost or IP address
const url = 'mongodb://127.0.0.1:27017';

//DataBase name
const dbname = "interviews";

//Initilizing client for connection
const Client = new MongoClient(url);
async function main(){
    await Client.connect();
    console.log("Connected successfully to mongoDB");
    const db = Client.db(dbname);
    const companiesCollection = db.collection("companies"); 
    const filter = {_id :new ObjectId("65163551e90e33c2eb7e4c94")};
    const result = await companiesCollection.deleteOne(filter);
    console.log(`Delete ${result.deletedCount} document(s)`);

}
main();