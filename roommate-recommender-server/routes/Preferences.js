const express = require("express");
const router = express.Router();
const { Preferences } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

//Get user preferences based on their email
router.get("/", validateToken, async (req, res) => {
  const userEmail = req.user.email;

  try {
    const userPreference = await Preferences.findOne({
      where: {
        email: userEmail,
      },
    });
    res.json(userPreference);
  } catch (error) {
    console.log(error);
  }
});

//Post a users preference once the are registered
router.post("/preferences", async (req, res) => {
  const {
    email,
    gender,
    foodpref,
    culinaryskills,
    alcohol,
    smoking,
    pets,
    sleepPatterns,
    noise,
  } = req.body;

  try {
    console.log("the data is : ", req.body);
    const userPref = Preferences.findOne({
      where: {
        email: email,
      },
    });

    if (userPref) {
      return res.json({ msg: "User has already filled their preferences" });
    } else {
      Preferences.create({
        email: email,
        gender: gender,
        foodpref: foodpref,
        culinaryskills: culinaryskills,
        alcohol: alcohol,
        smoking: smoking,
        pets: pets,
        sleeppatterns: sleepPatterns,
        noise: noise,
        // personality :personality
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
