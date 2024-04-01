/** Este archivo permite la comunicacion entre la base de datos y el servidor en el proyecto */
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Invalid or missing environment variable: 'MONGODB_URI'");
}

const connectToDataBase = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    await mongoose.connect(String(process.env.MONGODB_URI), {
      dbName: "school",
    });
    console.log("Connected with database!");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDataBase;
