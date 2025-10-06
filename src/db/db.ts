import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string || "");
        const connection = mongoose.connection;
        console.log("MongoDB connection object:", connection);
        connection.on("connected", () => {
            // Connection successful
            console.log("Connected to MongoDB");
        });
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};