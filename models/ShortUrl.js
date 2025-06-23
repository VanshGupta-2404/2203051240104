const mongoose = require("mongoose");

const ShortUrlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shortcode: { type: String, required: true, unique: true },
  expiry: { type: Date, required: true }
});

module.exports = mongoose.model("ShortUrl", ShortUrlSchema);
