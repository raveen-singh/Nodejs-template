var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Helo World');
});

var PORT = 3000 || proccess.env.PORT;

app.listen(PORT);