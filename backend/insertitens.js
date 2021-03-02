const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "projetosenac",
  password: "Semsenha123",
  port: 5432
});
console.log("Sucesso com a conexão do Banco de Dados");

//console.log("Sucesso na criação da Tabela 'Livros' table");
// Inserindo Dados no Banco
const sql_insert = `INSERT INTO usuario (Usuario_ID, Nome, Sobrenome, Email, Telefone, Textarea) VALUES
  (1,   'Marcos', 'Victor',	'marcos@hotmail.com', '86 8820-1045', 'NULL'),
  (2,	'Wellington', 'Costa',	'wellington@hotmail.com', '86 8820-2045', 'NULL'),
  (3,	'Diogo', 'Sales',	'diogo@hotmail.com', '86 8820-3045', 'NULL'),
  (4,	'Felipe', 'Alyson',	'felipe@hotmail.com', '86 8820-4045', 'NULL'),
  (5,	'Ester', 'Hadassa',	'ester@hotmail.com', '86 8820-5045', 'NULL'),
  (6,	'Leianny', 'Oliveira',	'leianny@hotmail.com', '86 8820-6045', 'NULL'),
  (7,	'Samya', 'Costa',	'samya@hotmail.com', '86 8820-7045', 'NULL'),
  (8,	'Ana', 'Sousa',	'ana@hotmail.com', '86 8820-8045', 'NULL')
  ON CONFLICT DO NOTHING;`;
pool.query(sql_insert, [], (err, result) => {
  if (err) {
    return console.error(err.message);
  }
  const sql_sequence = "SELECT SETVAL('usuario_Usuario_ID_Seq', MAX(Usuario_ID)) FROM usuario;";
  pool.query(sql_sequence, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Foi um sucesso a Inserção da Tabela de usuario");
  });
});
