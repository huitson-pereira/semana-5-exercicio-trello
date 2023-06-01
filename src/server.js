const express = require("express")
const app = express()
const rotasV1 = require("../src/routes")
//const cors = require("cors")

app.use(express.json())
app.use(rotasV1)


app.listen(3333, () => 
  console.log("Servidor rodando na porta 3333, http://localhost:3333")
) 