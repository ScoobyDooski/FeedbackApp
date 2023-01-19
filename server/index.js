const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.listen(5000);

app.get('test', (req, res) => {
    res.send({test: 'testing'});
});