const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html01.html");
})

app.get("/login", function(req, res) {
    res.sendFile(__dirname + "/login01.html");
})

app.get("/formulario", function(req, res) {
    res.sendFile(__dirname + "/formulario.html");
})

app.listen(3000, function() {
    console.log("Servidor rodando na url: https://localhost:3000");
})