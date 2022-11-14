const  mongoose = require('mongoose');
const Person = mongoose.model('usuarios', {
  name: String,
  email: String,
  senha: String
})

module.exports = Person