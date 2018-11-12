'use strict';

const express = require('express');

const data = require('./db/notes');

const app = express();

app.listen(8080, function() {
    console.info(`Server listening on ${this.address().port}`)
}).on('error', err => {
    console.error(err);
});
