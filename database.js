const mongoose = require('mongoose');
const { ModuleResolutionKind } = require('typescript');

function connectToDatabase () {

mongoose.connect (
    process.env.DATABASE_URL,
    {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const db = mongoose.connection;
db.on("error",(error)=> console.error(error));
db.once("open",()=> console.log("Connected to MongoDB"));

} 

module.exports = connectToDatabase;