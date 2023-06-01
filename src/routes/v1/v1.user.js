const { Router } = require("express");
const usersRoutesV1 = Router();

const { trocarPosicaoNoArray } = require("../../controllers/controller.user");

usersRoutesV1.patch('/trocarPosicaoLista/:nome', trocarPosicaoNoArray);


module.exports = usersRoutesV1;