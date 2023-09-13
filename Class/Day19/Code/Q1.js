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
        const newCompanies = {
            companyname: 'Google',
            webite: 'www.google.com',
            location: 'Bangalore',
        }
        const result = await companycollection.insertOne(newCompanies);
        console.log(`inserted ${result.insertedCount} documents into the collections`);
        console.log(`Inserted documents with _id: ${result.insertedId}`);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
    }

}
main();