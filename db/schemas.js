var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/myDB');

var User = new Schema({
    firstName: String,
    lastName: String,
    userName: {
      type: String,
      unique: true
    },
    password: String,
    email: String,
    playlist: []
});

var Video = new Schema({
    id: Number,
    title: String,
    desc: String,
    url: String
});

const user = mongoose.model("user", User);
const video = mongoose.model("video", Video);


module.exports = {
  user: user,
  video: video
}
