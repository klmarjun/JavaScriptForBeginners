const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","pug");
app.set('views','./views');
//Connect
try
{
    mongoose.connect("mongodb://127.0.0.1/admission",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('Connected to mongoDB');
}
catch(err)
{
    console.log('Error Connection to mongoDB:',err);
}
const Schema=mongoose.Schema;
const DataSchema=new Schema({
    name:String,
    email:String,
});
const DataModel = mongoose.model("students",DataSchema);
app.get('/',(req,res)=>{
    res.render('form');
});
//Function to fetch data 
app.post('/submit',(req,res)=>{
    const { name, email }= req.body;
    const newData=new DataModel({ name, email });
    newData
        .save()
        .then(()=>{
            res.send('Student information saved to MongoDB!');})
        .catch((err)=>{
            console.log("Error savings data:",err);
            res.send("Error savings data.");
        });
});
app.get("/data", (req, res) => {
    const searchQuery = req.query.search || '';
    const searchFilter = { $regex: searchQuery, $options: "i" };
  
    DataModel.find({ email: searchFilter })
      .then(records => {
        res.render('data', { records, searchQuery });
      }).catch(_ => res.send("Unexpected error"));
  })
  
  app.get('/update/:id', (req, res) => {
    const dataId = req.params.id;
    DataModel.findById(dataId).then(record => {
      res.render('update', { record })
    }).catch(_ => res.send("unexpected error"))
  })
  
  app.post("/update/:id", (req, res) => {
    const recordId = req.params.id;
    const { name, email } = req.body;
    DataModel.findByIdAndUpdate(recordId, { name, email })
      .then(() => {
        console.log("Student Details updated");
        res.redirect("/data");
      })
      .catch((err) => {
        console.error("Error updating record:", err);
        res.send("Error updating record.");
      });
  });
  
  app.get("/delete/:id", (req, res) => {
    const recordId = req.params.id;
    DataModel.findByIdAndRemove(recordId)
      .then(() => {
        console.log("Student Record removed from MongoDB");
        res.redirect("/data");
      })
      .catch((err) => {
        console.error("Error removing record:", err);
        res.send("Error removing record.");
      });
  });
  
  app.listen(3000, () => {
    console.log('connected to portnumber 3000');
  });