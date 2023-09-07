import mongoose from "mongoose";

const checkFormSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    
    postalcode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //at the time of new user created time added automatically
  }
);
export default mongoose.model("checkForm", checkFormSchema);
