const express = require('express');
const axios = require('axios');
const bodyParser = require('body-Parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req,res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);

    res.send({status: 'OK'});
})

app.listen((4005), () => {
    console.log('Listening on 4005')
});

