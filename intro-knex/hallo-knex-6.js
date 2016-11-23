"use strict"
const knex = require("./db");

if(!process.argv[2]){
  console.log("usage: node hello-knex-6.js <id>");
  process.exit(0);
}

knex("convidado").select().where({
  idconvidado:process.argv[2]
}).then(function(ret){
  console.log("id\t\tnome")
  let i = ret.length;
  while(i--){
    let conv = ret[i];
    console.log(conv);
    // console.log(Object.values(conv));
    // console.log(Object.keys(conv).map(key => conv[key]));
  }
  process.exit(0);
});
