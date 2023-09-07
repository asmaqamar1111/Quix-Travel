import mongoose from "mongoose";

const connnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Succeeded".bgMagenta.black);
  } catch (error) {
    `Error in MongoDB ${error}`.red;
  }
};
export default connnectDB;
