const { Schema, model } = require("mongoose");

const clientsSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthday: { type: Date, required: true },
    preferences: { type: String, required: true },
    hasCreditCard: { type: Boolean, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("clientModel", clientsSchema);
