'use strict';

const express = require('express');

const data = require('./db/notes');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080, function() {
    console.info(`Server listening on ${this.address().port}`)
}).on('error', err => {
    console.error(err);
});

app.get('/api/notes', (req, res) => {
    const searchTerm = req.query.searchTerm;
    if(!searchTerm) {
        res.json(data);
    } else res.json(data.filter(note => note.id == searchTerm));
});

app.get('/api/notes/:id', (req, res) => {
    const {id} = req.params;
    res.send(data.find(item => item.id === Number(id)));
})
