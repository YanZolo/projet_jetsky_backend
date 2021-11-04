const express = require('express');
const route = express.Router();

const authController = require('../controllers/auth.controllers')

route.post("/register", authController.signUp);
route.post("/login", authController.signIn);
route.get("/logout", authController.logout);
route.get("/:id", authController.getUserPage)

module.exports = route;
