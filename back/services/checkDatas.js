const Joi = require("joi");

const checkRegisterDatas = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(6).max(20).presence("required"),
    firstname: Joi.string().min(2),
    lastname: Joi.string().min(2),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const checkLoginDatas = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(6).max(20).presence("required"),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    console.error("Valikdation error :", error);
    res.status(400).json(error);
  }
};

module.exports = {
  checkRegisterDatas,
  checkLoginDatas,
};
