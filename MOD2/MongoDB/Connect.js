const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
async function main()
{
    try
    {
        await client.connect();
        console.log("Connected successfully to MongoDB");
    } 
    catch(err)
    {
        console.error("Error connection to MongoDB",err);
    } 
    finally
    {
        await client.close();
    }
}

main();