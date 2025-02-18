import mongoose from "mongoose";
import config from "./config.js";

export const connectdb = async()=>{
  try{
    await mongoose.connect(config.MONGO_URI,{
      dbName:"coachingmanagement"
    })
  }catch(error){
    console.log("error while occur when connect db",error);
  }
}

