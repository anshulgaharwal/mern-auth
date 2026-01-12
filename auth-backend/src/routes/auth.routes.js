const express = require("express");
const router = express.Router();

const { startAuth } = require("../controllers/auth.controller");
router.post("/start", startAuth);//handles post request
module.exports = router;
//post req:sending data. creating, starting action