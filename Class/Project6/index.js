const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','pug')
app.set('views','./views')
try{
    mongoose.connect('mongodb://127.0.0.1/admission',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('Connected to MongoDB')
}
catch(err){
    console.error('Error Connecting to mongoDB')
}
const Schema = mongoose.Schema
const DataSchema  = new Schema({
    name:String,
    email:String
})
const DataModel = mongoose.model('students',DataSchema)

app.get('/',(req,res)=>{
    res.render('forms')
})
app.listen(3000,()=>{
    console.log('Admission form is running on port 3000')
})

app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    const newData = new DataModel({ name, email });
    newData
      .save()
      .then(() => {
        res.send("Student information saved to MongoDB!");
      })
      .catch((err) => {
        console.error("Error saving data:", err);
        res.send("Error saving data.");
      });
  });
  