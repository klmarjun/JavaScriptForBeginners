const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'interviews';
const client = new MongoClient(url);
async function main() {
    try{
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const companycollection = db.collection('COmpanies');
        const cursor = companycollection.find();
        console.log('Items are:');
        await cursor.forEach((document) => {
            console.log(document);
            });
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
    }

}
main();