'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: String,
    password: String,
    sex: String,
    address: String,
  }, {
    timestamps: {},
  });
  return mongoose.model('User', UserSchema);
};
