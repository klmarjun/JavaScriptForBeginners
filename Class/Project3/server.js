const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Welcome to JavaScript Class');
    });
app.get('/calculator', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    if(!num1 || !num2) {
        res.status(400).send('Please enter valid numbers');
        return;
    }
    const result = num1 + num2;
    res.send(`Sum of ${num1} and ${num2} is ${result}`);
    });
    app.listen(port,()=>{
        console.log(`Example app listening at http://localhost:${port}`)
    })
