const {MongoClient,ObjectId} = require("mongodb")
const url = "mongodb://localhost:27017"
const dbName = "interviews"
const client = new MongoClient(url)
async function main(){
    try{
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    
    const COmpaniescollection = db.collection("COmpanies")
    console.log("found")
    const filter = {_id:new ObjectId("64ffece4af0420a63bb810e3")}
    const result = await COmpaniescollection.deleteOne(filter);
    console.log(result);
    console.log(`${result.deletedCount} document(s) was/were deleted.`)
    }
    catch(e){
        console.log(e)
    }
    finally{
        await client.close()
    }
}
main();