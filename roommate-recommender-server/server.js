const express = require("express");
const db = require("./models");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware to handle urlencoded data(formdata)
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use(
  cors({
    //origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

//Login register (auth) Routers
const userRouter = require("./routes/Users");
app.use("/auth", userRouter);

//Profile Routers
const profileRouter = require("./routes/Profile");
app.use("/profile", profileRouter);

//Preferences router
const preferencesRouter = require("./routes/Preferences");
app.use("/preferences", preferencesRouter);

//Personality router
const personalityRouter = require("./routes/PersonalityTest");
app.use("/personality", personalityRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
