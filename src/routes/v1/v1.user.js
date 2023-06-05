const { Router } = require("express");
const usersRoutesV1 = Router();

const { trocarPosicaoNoArray } = require("../../controllers/controller.user");

usersRoutesV1.patch('/trocarPosicaoLista/:nome', trocarPosicaoNoArray);
usersRoutesV1.get("/listaDosDiasDoMes", mostrarDiasDoMes)

module.exports = usersRoutesV1;