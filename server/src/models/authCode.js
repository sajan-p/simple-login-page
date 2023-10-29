const mongoose = require("mongoose");
const { Schema } = mongoose;

const authCodeSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AuthCode", authCodeSchema);
