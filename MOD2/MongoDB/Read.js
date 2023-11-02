const {MongoClient} = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const dbName = "interviews";
const client = new MongoClient(url);
async function main()
{
    try
    {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        const db = client.db(dbName);
        const companiesCollection = db.collection("companies");

        const cursor = companiesCollection.find();
        console.log("Items are : ");
        await cursor.forEach((document) =>
        {
            console.log(document);
        });
    }catch(err)
    {
        console.log("Error : ",err);
    }finally
    {
        await client.close();
    }
}    

main();