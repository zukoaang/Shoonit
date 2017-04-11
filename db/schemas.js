var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var user = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    email: String,
    playlist: []
});

var video = new Schema({
    id: Number,
    title: String,
    desc: String,
    url: String
});


var ohad = new user({
    id: 1234,
    firstName: 'Ohad',
    lastName: 'Harpaz',
    userName: 'stam',
    password: '1234',
    email: 'email@gamil.com',
    playlist: [1, 2, 3, 4]
});

console.log(ohad);