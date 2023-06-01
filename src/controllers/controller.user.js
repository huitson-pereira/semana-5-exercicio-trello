const express = require("express");
//const fs = require("fs");
const app = express();
//const mudaPosicaoArrey = require("./src/utils.js")

app.use(express.json())

module.exports = {
    async trocarPosicaoNoArray(req, res){
        let lista = ["Pedro", "Jose","Aderbal", "Danilo", "Luiza", "Vitoria"]
        console.log(lista)
        const { nome } = req.params;
        const nomeParaTrocar = nome;

        if(!lista.includes(nomeParaTrocar)){
            return res.status(400).send(`O nome ${nomeParaTrocar} não estána lista`)
        }
        if(lista.indexOf(nomeParaTrocar) === 0){
            return res.status(200).send(lista)
        }else{
            let posicao = lista.indexOf(nomeParaTrocar);
            let aux = lista[0];
            
            lista[0] = lista[posicao];
            lista[posicao] = aux;
            return res.status(200).send(lista);
        }
    }
}