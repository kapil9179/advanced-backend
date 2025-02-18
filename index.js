import express from "express";
import config from "./configs/config.js";
import userRoute from './routes/user.route.js'
import { connectdb } from "./configs/db.config.js";
const app = express();
connectdb();

app.use(express.json());

app.use("/api", userRoute);

app.use("/", (req, res) => {
    res.json({
      message: "Welcome To Advanced Backend Series",
    });
  });

app.listen(config.PORT, () => {
  console.log(`server is running ${config.base_URL}`);
});
