const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const Client = new MongoClient(url);
async function main(){
    try{
        await Client.connect();
        console.log('Connected successfully to MongoDB');
    } catch(err){
        console.log('Error connection to MongoDB:', err);
    }
    finally{
        await Client.close();
    }
}
main();