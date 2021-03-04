/*
Criando uma Biblioteca
*/
const express = require("express"); //Importa o módulo Express
const path = require("path");
const { Pool } = require("pg");

// Criando o Servidor Express
const app = express(); // Instancia um servidor Express

// Configuração do Servidor
app.set("view engine", "ejs"); //Visualizações criadas no Express
app.set("views", path.join(__dirname, "views")); //Visualizações na pasta views
app.use('/views', express.static(__dirname + '/icones'));
app.use(express.static(path.join(__dirname, "public"))); //Os arquivos estáticos são salvos na pasta public
app.use(express.static(path.join(__dirname, "icones")));

// Conexão do Banco de Dados PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "projetosenac",
  password: "Semsenha123",
  port: 5432
});
console.log("Sucesso com a conexão do Banco de Dados");

// Iniciando o Servidor
app.listen(3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});

// Comando GET / Responde às solicitações GET apontando para a raiz do site "/".
// Responde às solicitações HTTP GEt que chegam na URL passasa pela linha (req, res)=>{}
app.get("/", (req, res) => {
    //res.send("Hello world...");
  res.render("index");
});


//Comando GET //Index
app.get("/index", (req, res) => {
  res.render("index");
})

// Comando GET /about
app.get("/about", (req, res) => {
  res.render("about");
});

// Comando GET /depoimento
app.get("/depoimento", (req, res) => {
  res.render("depoimento");
});

//Comando GET /feeding
app.get("/feeding", (req, res) => {
    res.render("feeding");
});

// Comando GET /form
app.get("/form", (req, res) => {
    res.render("form");
});

// Comando GET /health
app.get("/health", (req, res) => {
    res.render("health");
});

/*
// Comando GET /books
app.get("/", (req, res) => {
  const sql = "SELECT * FROM comidas ORDER BY preco";
  pool.query(sql, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("comidas", { model: result.rows });
  });
});
*/

/*
// Comando POST /create
app.post("/create", (req, res) => {
  const sql = "INSERT INTO Comidas (comida_id, comidas, preco, acompanhamento) VALUES ($1, $2, $3)";
  const comida = [req.body.comida_id, req.body.comidas, req.body.preco, req.body.acompanhamento];
  pool.query(sql, comida, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/comidas");
  });
});

// Comando GET /edição/5
app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM comidas WHERE comida_ID = $1";
  pool.query(sql, [id], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("edit", { model: result.rows[0] });
  });
});

// Comando POST /ediçaõ/5
app.post("/edit/:id", (req, res) => {
  const id = req.params.id;
  const comida = [req.body.comida_id, req.body.comidas, req.body.preco, req.body.acompanhamento, id];
  const sql = "UPDATE comidas SET comida_id = $1, comidas = $2, preco = $3, acompanhamento = $4 WHERE (comida_ID = $5)";
  pool.query(sql, comida, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/comidas");
  });
});

// Comando GET /delete/5
app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM comidas WHERE comida_ID = $1";
  pool.query(sql, [id], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("delete", { model: result.rows[0] });
  });
});

// Comando POST /delete/5
app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM comidas WHERE comida_ID = $1";
  pool.query(sql, [id], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/comidas");
  });
});
*/