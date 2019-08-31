const express = require("express");
const router = express.Router();
const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");
const validator = require("../../validators/validate");

router.get("/test", (req, res) => {
  res.json({ msg: "test works" });
});

router.post("/register", (req, res) => {
  const registerData = req.body;

  const registerInputErrors = validator.validateRegisterInput(registerData);

  if (!validator.isObjectEmpty(registerInputErrors)) {
    res.json(registerInputErrors);
  }

  Admin.findOrCreate({
    where: { email: registerData.email },
    defaults: registerData
  }).then(([newAdmin, created]) => {
    if (created) {
      res.json(newAdmin);
    } else {
      res.json({ msg: "Admin user already exists" });
    }
  });
});

module.exports = router;
