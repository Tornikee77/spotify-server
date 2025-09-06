const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));

const connectedDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in .env");
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MOngoDB connection filed:", error);
    process.exit(1);
  }
};
module.exports = connectedDB;
