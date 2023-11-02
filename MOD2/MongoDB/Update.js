const {MongoClient,ObjectId} = require("mongodb");
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

        const filter = {_id:new ObjectId("6539592b82853b8ee760d3c9")};
        // console.log(filter);
        const update = {
            $set : {
                companyname : "Microsoft Corporation",
            },
        };
        const result = await companiesCollection.updateOne(filter,update);
        console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
    }catch(err)
    {
        console.log("Error : ",err);
    }finally
    {
        await client.close();
    }
}    

main();