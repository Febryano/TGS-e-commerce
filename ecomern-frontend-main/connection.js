require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://heimdall:cemara@rf.l7e1qi1.mongodb.net/ecomern?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
