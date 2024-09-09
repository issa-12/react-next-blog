import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://issaalayan:issa.2024@cluster0.6otxg.mongodb.net/blog-app')
    console.log("DB Connected")
}