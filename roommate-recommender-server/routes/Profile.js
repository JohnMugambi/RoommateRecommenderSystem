const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const { Users } = require("../models");

//Gets user details by email
router.get("/", validateToken, async (req, res) => {
  const userEmail = req.user.email;
  try {
    const user = await Users.findOne({
      where: {
        email: userEmail,
      },
    });
    res.json(user);
  } catch (error) {
    rconsole.log(error);
  }
});

module.exports = router;
