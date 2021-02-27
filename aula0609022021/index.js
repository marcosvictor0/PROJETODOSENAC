//Rotas Dinâmicas 

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Bem Vindo á minha aplicação Web !.");
})

app.get("/ola/:nome/:cargo/:cor/:idade", function(req, res) {
    res.send("<h1>" + 'Olá ' + req.params.nome + "</h1>" +
    "<h2>" + 'Seja bem vindo ' + req.params.nome + "</h2>" 
    + "<h3>" + 'Sua cor escolhida foi: '+ req.params.cor +"</h3>"+
    "<h3>"+ 'Sua idade é: '+ req.params.idade +"</h3>");

})

app.get("/sair", function(req, res) {
    res.send("Sair.");
})

app.listen(3000, function() {
    console.log("Servidor rodando na url: https://localhost:3000");
})