import mongoose from "mongoose";

export const ConnectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;
    await mongoose.connect(mongoURI)
    console.log("DB Connected")
}