'use strict';

const express = require('express');
const app = express();
const stamper = require('./middleware/stamper.js');
const noRouteHandler = require('./handlers/404.js');

app.use(express.json());

//routes
app.get('/data', stamper, (req, res) => {
    let output = {
        age: '25',
        name: 'david',
        timestamp: req.timestamp
    }
    res.status(200).json(output);
})

function start(port) {
    app.listen(port, () => {
        console.log(`server up on port ${port}`)
    })
}

app.use('*', noRouteHandler);

module.exports = {
    app: app,
    start: start
}