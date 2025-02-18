import {configDotenv} from "dotenv";
import { getIPAddress } from "../utils/Address.js";
 configDotenv();
 const ENV = process.env.NODE_ENV || "development"
   

 const config = {
  PORT:ENV==="Production" ? process.env.Prd_Port : process.env.Dev_Port,
  MONGO_URI:ENV==="Production" ? process.env.Prd_Db_URL : process.env.Dev_Jwt_Secret_Key,
  base_URL:`http://${getIPAddress()}:${ENV === "Production" ? process.env.Prd_Port : process.env.Dev_Port}`,
  jwt_Secret:ENV==="Production" ? process.env.Prd.jwt_Secret : process.env.Dev_Jwt_Secret_Key
 }


 export default config