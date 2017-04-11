const Schemas = require('./db/schemas');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDB');


console.log(Schemas);
