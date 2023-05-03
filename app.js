const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./route/authgo");
const mongoose = require("mongoose");
const userRouter = require("./route/userRoute");
const jobRouter = require("./route/jobRoute");
const courseRouter = require("./route/courseRoute")
const sessionRouter = require("./route/sessionRoute")
const assessmentRouter = require("./route/assessmentRoute")
const resultRouter = require("./route/resultRoute")
const dotenv = require("dotenv");
const contractRoute = require("./route/contract-routes");
const notificationRouter = require("./route/notificationRoute")
const applicationRouter = require("./route/applicationRoute")
const reviewRoute = require("./route/reviewRoute");
const atelierRoute = require("./route/atelierRoute");
const path = require('path');


dotenv.config();
require("dotenv").config();

app.use(
  cors({
    origin: ["https://645298db4ceffe446ecf03c9--expertise-shaper.netlify.app"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);


// configure session middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connecting to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_MONGO)
  .then(() => console.log("CONNECTED TO DB"))
  .then(() => app.listen(process.env.BACKEND_PORT))
  .catch((err) => console.log(err));

app.use("/contract", contractRoute);
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/session", sessionRouter);
app.use("/job", jobRouter);
app.use("/auth", authRoute);
app.use("/assessment", assessmentRouter);
app.use("/result", resultRouter);
app.use("/notification", notificationRouter);
app.use("/application", applicationRouter);
app.use("/review", reviewRoute);
app.use("/atelier", atelierRoute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

