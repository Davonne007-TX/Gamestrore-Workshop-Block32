const express = require('express');
const app = express();
const PORT = 8080;

// init morgan
const morgan = require('morgan');
app.use(morgan('dev'));  //also a middleware, also applied to every route 

// init body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //this will run every response, middleware, every app.use

// init cors
const cors = require('cors');  //being used on every route, middleware 
app.use(cors());

// init db client
const client = require('./db/client');
client.connect();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Router: /api
app.use('/api', require('./api'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
