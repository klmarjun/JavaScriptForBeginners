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
        const newCompanies = {
            companyname : "Microsoft",
            website : "www.microsoft.com",
            location : "USA",

        };
        const result = await companiesCollection.insertOne(newCompanies);
        console.log(`Inserted ${result.insertedCount} document into the collection`);
        console.log("Inserted doucument ID :",result.insertedId);
    }catch(err)
    {
        console.log("Error : ",err);
    }finally
    {
        await client.close();
    }
}

main();