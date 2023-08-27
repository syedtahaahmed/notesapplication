const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  alertmessage: { type: String, required: true },
  priority: { type: String, required: true },
  createddate: { type: String, required: true },
  description: { type: String, required: true },
  id1: { type: String, required: true },


 
});

module.exports = mongoose.model("Post", postSchema);
