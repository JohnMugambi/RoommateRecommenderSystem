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

router.post("/preferences", async (req, res) => {
  const {
    email,
    id,
    gender,
    foodpref,
    culinaryskills,
    alcohol,
    pets,
    sleeppatterns,
    noise,
  } = req.body;

  try {
    Preferences.create({
      email: email,
      gender: gender,
      foodpref: foodpref,
      culinaryskills: culinaryskills,
      alcohol: alcohol,
      pets: pets,
      sleeppatterns: sleeppatterns,
      noise: noise,
      // personality :personality
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
