const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Web Application to display product info');
    });
app.get('/products', (req, res) => {
    const productInfo = [
        {
            id: 1,
            name: 'laptop',
            price: 1000
        },
        {
            id: 2,
            name: 'mobile',
            price: 500
        },
        {
            id: 3,
            name: 'tablet',
            price: 800
        }
    ];
    res.json(productInfo);
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });
