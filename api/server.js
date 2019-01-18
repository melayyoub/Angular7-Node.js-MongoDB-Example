const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
connect = require('connect'),
config = require('./DB');


const UsersRoute = require('./routers/users.route');
// Retrieve and connect to the MongoDB to check if it's working

// const MongoClient = require('mongodb').MongoClient;
// Connect to the db
// MongoClient.connect("mongodb://localhost:27017/ddkits", function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
// });
// 

// connect to the MongoDB using Mongoose.Promise and express for easier and clean body and Praser

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// const instead of VAR with ES6 so we can make sure it's not changed within any of our later functions()
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/users', UsersRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});