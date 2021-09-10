const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.SchemaType({
  email: {
    trim: true,
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  fullname: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving inside the DB
UserSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
