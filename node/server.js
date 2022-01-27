
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const API_KEY = 'ENTER YOU SECRET KEY'

app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/success', (req, res) => {
    res.send('Sucess')
})

app.get('/cancel', (req, res) => {
    res.send('Cancelled')
})

app.get('/failure', (req, res) => {
    res.send('Failed')
})

app.post('/getHostedPaymentPage', (req, res) => {
    const data = JSON.stringify(req.body)

    const options = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": API_KEY,
        },
    }

    axios.post('https://api.sandbox.checkout.com/hosted-payments', data, options)
        .then((result) => {
            res.send(result.data)
        }).catch((err) => {
            console.error(err);
        });
});

const PORT = 5000;
app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));