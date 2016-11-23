const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./hello.sqlite"
  },
  useNullAsDefault: true // ¯\_(ツ)_/¯
});

// queremos um nome para este convidado
if(!process.argv[2]){
  console.log("usage: node hello-knex-2.js <nome>");
  process.exit(0);
}

// inserir convidados
knex("convidado").insert({
  nomeconvidado:process.argv[2]
},"idconvidado").then((ret) => {
  console.log(`convidado inserido com a chave ${ret[0]}`);
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});
