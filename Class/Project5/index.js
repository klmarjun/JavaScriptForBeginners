var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.set('views', './views');

// app.get('/',function(req,res){
//     res.render('dynamic',{
        
//         name: "TutorialsPoint",
//         url:"http://www.tutorialspoint.com"
//     });
// });
app.get('/',function(req,res){
    res.render('application');
});

app.listen(3000,function(){
    console.log("Live at Port 3000");
});