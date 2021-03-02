const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "projetosenac",
  password: "Semsenha123",
  port: 5432
});
// console.log("Sucesso sua conexão com o Banco de Dados");

const sql_create = `CREATE TABLE usuario (
    Usuario_ID SERIAL PRIMARY KEY,
    Nome VARCHAR(120) NOT NULL,
    Sobrenome VARCHAR(30) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Telefone VARCHAR(20),
    Textarea VARCHAR (500)
  );`;
  
  pool.query(sql_create, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Sua Tabela de usuario foi criada com sucesso");
});