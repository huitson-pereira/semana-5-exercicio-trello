const { Router } = require("express");
const usersRoutesV1 = Router();

const { trocarPosicaoNoArray, mostrarDiasDoMes, salvarDadosJson } = require("../../controllers/controller.user");

usersRoutesV1.patch('/trocarPosicaoLista/:nome', trocarPosicaoNoArray);
usersRoutesV1.get("/listaDosDiasDoMes", mostrarDiasDoMes);
usersRoutesV1.post("/salvarDados", salvarDadosJson);

module.exports = usersRoutesV1;