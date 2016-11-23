// hello-knex-8.js
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); // olha a macumba..

// queremos um nome para este cachorro
if(!process.argv[2]){
  console.log("usage: node hello-knex-8.js <nome>");
  process.exit(0);
}

// inserir convidados
knex("cachorro").insert({
  nomecachorro:process.argv[2]
},"idcachorro").then((ret) => {
  console.log(`cachorro inserido com a chave ${ret[0]}`);
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});
