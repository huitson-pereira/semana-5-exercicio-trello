const express = require("express");
const listarDiasDoMes = require("../utils.js")
const fs = require("fs");
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
    },

    async mostrarDiasDoMes(req, res){
        const {mes,ano} = req.query;
        
        if(mes === undefined){
            return res.status(400).send("Mês não informado");
        }

        if(mes < 1 || mes > 12){
            return res.status(400).send(`O mês ${mes} é um mês inválido`)
        }

        let diasDoMes = [];
        listarDiasDoMes(mes, ano).forEach((dia) =>{
            diasDoMes.push(dia)
        });
        return res.status(200).send(diasDoMes);
    },

    async salvarDadosJson(req, res){
        const caminhoDoArquivo = "./database/dados.json";
        const dados = req.body;

        if(Object.keys(dados).length === 0){
            return res.status(400).send("Dados não foram informados")
        }
        if(fs.existsSync(caminhoDoArquivo)){
            const conteudoDoArquivo = fs.readFileSync(caminhoDoArquivo);
            const jasonDados = JSON.parse(conteudoDoArquivo);

            jasonDados.push(dados);
            fs.writeFileSync(caminhoDoArquivo, JASON.stringify(jasonDados));
        }else{
            fs.writeFileSync(caminhoDoArquivo, JSON.stringify([dados]));
        }
        return res.status(200).send("Dados salvo com sucesso");    
    },

    async consultarUsuario(req, res){
        const ageMin = parseInt(req.query.ageMin);
        const ageMax = parseInt(req.query.ageMax);
        const state = req.query.state;
        const job = req.query.job;
        const caminhoDoArquivo = "./database/user.json";
        const conteudoDoArquivo = fs.readFileSync(caminhoDoArquivo);
        const jsonDados = JSON.parse(conteudoDoArquivo);

        const pesquisarNoJsonUser = jsonDados.filter(user => {
            const criterioIdade = (!ageMin || user.age >= ageMin) && (!ageMax || user.age <= ageMax);
            const criterioState = !state || user.state.toLowerCase() === state.toLowerCase();
            const criterioJob = !job || user.job.toLowerCase() === job.toLowerCase();
        
            return criterioIdade && criterioState && criterioJob;
        });
        
        return res.json(pesquisarNoJsonUser);
    }
}