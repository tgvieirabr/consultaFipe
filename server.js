require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const routes = require('./routes');
const connectToDatabase = require('./database');
var cors = require('cors');


const app = express();
const port = 3333;
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(routes);

connectToDatabase();



app.listen(port, () => {
console.log(`Server running on http://localhost:${port}`);
});
