const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(//creating a schema
  {
    email: { type: String, unique: true, sparse: true },//user properties
    phone: { type: String, unique: true, sparse: true },
    password: { type: String },
    emailVerified: { type: Boolean, default: false },
    phoneVerified: { type: Boolean, default: false },
    provider: {
      type: String,
      enum: ["email", "phone", "google"],
    },
  },
  { timestamps: true }//mngs auto adds two fields cretaedAt, updatedAt
);

module.exports = mongoose.model("User", userSchema);
//creates a model used to interact with DB with model name user
//mngdb will create collections of users with blue print of userSchema
//without model u cannot read and write data

//in this file db structure is defined
//sparse:true allow multiple users with null email
//unique:true no 2 user will have same email
//auth provide: tells how the user signed up