"use strict"
const knex = require("./db");

if(!process.argv[2]){
  console.log("usage: node hello-knex-4.js <id>");
  process.exit(0);
}

let id = process.argv[2];

// atualizar convidados
knex("convidado").del().where({
  idconvidado:id
}).then(() => {
  console.log(`convidado ${id} removido`);
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
});
