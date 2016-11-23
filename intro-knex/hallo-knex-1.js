const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./hello.sqlite"
  }
});

// criar uma tabela
knex.schema.createTable("convidado", (table) =>{
  table.increments("idconvidado");
  table.string("nomeconvidado");
}).then(() => {
  console.log("tabela criada");
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});
