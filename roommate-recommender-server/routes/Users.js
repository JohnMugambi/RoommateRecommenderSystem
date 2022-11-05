const express = require("express");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");
const router = express.Router();
const { Users } = require("../models");

router.get("/test", validateToken, async (req, res) => {
  res.json({ msg: "This works" });
});

//registers a new user
router.post("/register", async (req, res) => {
  const { firstname, lastname, dob, email, password } = req.body;
  try {
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        firstname: firstname,
        lastname: lastname,
        dob: dob,
        email: email,
        password: hash,
      }).then(async () => {
        const user = await Users.findOne({
          where: {
            email: email,
          },
        });
        const accessToken = sign(
          { email: user.email, id: user.id },
          "importantsecret"
        );
        res.json(accessToken);
      });
    });
  } catch (error) {
    console.log(error);
    res.json("Something wrong happened");
  }
});

//Login users
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (!user) return res.json({ msg: "User doesn't exist" });

    bcrypt.compare(password, user.password).then((match) => {
      if (!match) return res.json({ msg: "Incorrect Password" });

      const accessToken = sign(
        { email: user.email, id: user.id },
        "importantsecret"
      );
      res.json(accessToken);
    });
  } catch (error) {
    res.status(404).json({ msg: "Email not found" });
    console.log(error);
  }
});

//gets if user is authenticated or not
router.get("/auth", validateToken, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
