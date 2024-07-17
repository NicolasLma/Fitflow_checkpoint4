const express = require("express");
const { login, register } = require("../controllers/authController");
const {
  checkLoginDatas,
  checkRegisterDatas,
} = require("../service/middlewares/checkDatas");

const router = express.Router();

router.post("/login", checkLoginDatas, login);
router.post("/register", checkRegisterDatas, register);

module.exports = router;
