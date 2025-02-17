import express from 'express'
import { configDotenv } from 'dotenv';
import config from './config.js';
const app = express();
configDotenv();



app.listen(config.PORT,()=>{
    console.log(`server is running ${config.base_URL}`);
});





