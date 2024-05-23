import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
