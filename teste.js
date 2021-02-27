// Criando módulos no framework Express

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Bem Vindos á minha aplicação Web!.");
});

app.get("/informativos", function(req, res) {
    res.send("Logo abaixo tem as informações, clique Nelas.");
});

app.get("/menu", function(req, res) {
    res.send("Bem Vindo ao Menu.");
});

app.listen(3000, function() {
    console.log("Servidor Rodando na url http://localhost:3000");
});