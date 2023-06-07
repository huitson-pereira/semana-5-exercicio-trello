const { Router } = require("express");
const usersRoutesV1 = Router();

const { 
    trocarPosicaoNoArray, 
    mostrarDiasDoMes, 
    salvarDadosJson, 
    consultarUsuario, 
    alterarDadosUsuario, 
    deletarUsuario 
} = require("../../controllers/controller.user");

usersRoutesV1.patch('/trocarPosicaoLista/:nome', trocarPosicaoNoArray);
usersRoutesV1.get("/listaDosDiasDoMes", mostrarDiasDoMes);
usersRoutesV1.post("/salvarDados", salvarDadosJson);
usersRoutesV1.get("/pesquisarUsuario", consultarUsuario);
usersRoutesV1.put("/alterar/:id", alterarDadosUsuario);
usersRoutesV1.delete("/apagar/:id", deletarUsuario);
module.exports = usersRoutesV1;