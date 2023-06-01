const { Router } = require('express');
const rotasV1 = Router();
const usersRoutesV1 = require("./v1/v1.user");

rotasV1.use(usersRoutesV1);

module.exports = rotasV1;