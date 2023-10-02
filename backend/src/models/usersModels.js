const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {type: String, require:true},
    lastName: {type: String, require:true},
    gender: {type: String, require:true},
    userName: {type: String, require:true},
    email: {type: String, require:true},
    password: {type: String, require:true},
    birthday: {type: Date, require:true},
    phone: {type: Number, require:true},
    rol: {type: String, require:true},
  },
  { timestamps: true, versionKey: false }
);

module.exports = model('UserModel', userSchema);
