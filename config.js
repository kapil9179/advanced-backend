import {configDotenv} from "dotenv";
import { getIPAddress } from "./utils/Address.js";
 configDotenv();
 const ENV = process.env.NODE_ENV || "development"
 console.log("get ip address",getIPAddress());
   

 const config = {
  PORT:ENV==="Production" ? process.env.Prd_Port : process.env.Dev_Port,
  MONGO_URI:ENV==="Production" ? process.env.Prd_Db_URL : process.env.Dev_Db_URL,
  base_URL:`http://${getIPAddress()}:${ENV === "Production" ? process.env.Prd_Port : process.env.Dev_Port}`,
 }


 export default config