const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt")
const userSchema = new Schema({

  firstName: {
    type: String,
    // required: true,
    minLength: 3,
    maxLength: 55,
    trim: true
  },

  lastName: {
    type: String,
    // required: true,
    minLength: 3,
    maxLength: 55,
    trim: true
  },

  email: {
    type: String,
    // required: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    // required: true,
    max: 1024,
    minlength: 6
  },
});


userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('Mot de passe incorrect');
  }
  return console.log('Email incorrect')
};

module.exports = mongoose.model('User', userSchema)
