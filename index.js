const models = require('./db/schemas');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;



// let newUser = new models.user({
//   firstName: 'test',
//   lastName: 'test',
//   userName: 'test1',
//   password: '1234',
//   email: 'test@test.com',
// });

// newUser.save(crudCallback);

models.user.find('*', crudCallback)



function crudCallback(err,res){
  if (err){
    console.log(err);
  }
  console.log(res);
}
