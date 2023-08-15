const express = require('express');
const app = express();
const PORT = 8080;

// init morgan
const morgan = require('morgan');
app.use(morgan('dev'));  //also a middleware, also applied to every route 

// init body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //this will run every response into json, middleware, every app.use

// init cors
const cors = require('cors');  //being used on every route, middleware 
app.use(cors());

// init db client
const client = require('./db/client');  
client.connect();  //connecting to the client, good place to do it here in the index 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Router: /api
app.use('/api', require('./api')); //any route that are exported from here, all routes will start with api

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


//this is the outer most index, where we initiate our app, the invocation of the express library
 //express lets us spin up a server, to make build an API 
