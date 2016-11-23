"use strict"
// hello-knex-7.js
const knex = require("./db");

if(!process.argv[3]){
  console.log("usage: node hello-knex-7.js <id> <nome>");
  process.exit(0);
}

let q = "update convidado set nomeconvidado = :nome where idconvidado = :id";
let p = {
  nome: process.argv[3],
  id: process.argv[2]
};

knex.raw(q,p).then(() => {
  // você pode encadear consultas assim
  knex.raw("select * from convidado").then((ret) => {
    let i = ret.length;
    while(i--){
      console.log(ret[i]);
    }
    process.exit(0);
  });
});
