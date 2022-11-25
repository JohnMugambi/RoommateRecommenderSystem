const express = require("express");
const router = express.Router();
const { PersonalityQns } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

//Get users personality questions
router.get("/", validateToken, async (req, res) => {
  const userEmail = req.user.email;

  try {
    const userPersonality = await PersonalityQns.findOne({
      where: {
        email: userEmail,
      },
    });
    res.json(userPersonality);
  } catch (error) {
    console.log(error);
  }
});

//Post a user personality questions
router.post("/personality-questions", async (req, res) => {
  const {
    email,
    ext1,
    ext2,
    ext3,
    ext4,
    ext5,
    ext6,
    ext7,
    ext8,
    ext9,
    ext10,
    est1,
    est2,
    est3,
    est4,
    est5,
    est6,
    est7,
    est8,
    est9,
    est10,
    agr1,
    agr2,
    agr3,
    agr4,
    agr5,
    agr6,
    agr7,
    agr8,
    agr9,
    agr10,
    csn1,
    csn2,
    csn3,
    csn4,
    csn5,
    csn6,
    csn7,
    csn8,
    csn9,
    csn10,
    opn1,
    opn2,
    opn3,
    opn4,
    opn5,
    opn6,
    opn7,
    opn8,
    opn9,
    opn10,
  } = req.body;

  try {
    console.log("The data from form :", req.body);
    const userPersonality = await PersonalityQns.findOne({
      where: {
        email: email,
      },
    });

    console.log("the usere: ", userPersonality);
    if (userPersonality) {
      return res.json({
        msg: "User has already filled their questionnarie",
      });
    } else {
      PersonalityQns.create({
        email: email,
        EXT1: ext1,
        EXT2: ext2,
        EXT3: ext3,
        EXT4: ext4,
        EXT5: ext5,
        EXT6: ext6,
        EXT7: ext7,
        EXT8: ext8,
        EXT9: ext9,
        EXT10: ext10,
        EST1: est1,
        EST2: est2,
        EST3: est3,
        EST4: est4,
        EST5: est5,
        EST6: est6,
        EST7: est7,
        EST8: est8,
        EST9: est9,
        EST10: est10,
        AGR1: agr1,
        AGR2: agr2,
        AGR3: agr3,
        AGR4: agr4,
        AGR5: agr5,
        AGR6: agr6,
        AGR7: agr7,
        AGR8: agr8,
        AGR9: agr9,
        AGR10: agr10,
        CSN1: csn1,
        CSN2: csn2,
        CSN3: csn3,
        CSN4: csn4,
        CSN5: csn5,
        CSN6: csn6,
        CSN7: csn7,
        CSN8: csn8,
        CSN9: csn9,
        CSN10: csn10,
        OPN1: opn1,
        OPN2: opn2,
        OPN3: opn3,
        OPN4: opn4,
        OPN5: opn5,
        OPN6: opn6,
        OPN7: opn7,
        OPN8: opn8,
        OPN9: opn9,
        OPN10: opn10,
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
