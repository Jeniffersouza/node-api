const express = require('express');
const  mongoose = require('mongoose');
const server = express()
const cadastro = require('./routes/cadastro')
const usuario = require('./routes/usuarios')
require('dotenv').config()


//forma de ler json / middleware
server.use(
  express.urlencoded({
    extends:true
  })
)
server.use(express.json())


//rota da API

server.use('/cadastrar', cadastro)
server.use('/usuarios', usuario)

//conexão ao banco de dados!
const DB_USER= process.env.DB_USER
const DB_SENHA= encodeURIComponent(process.env.DB_SENHA)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_SENHA}@api.hdvchyr.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {

    console.log('conectado ao Banco de Dados')
    server.listen(3000, () => {
    console.log('server funcionando')
  })
  
})
.catch((err) => console.log('deu erro na conexão ao banco de dados' + err))
