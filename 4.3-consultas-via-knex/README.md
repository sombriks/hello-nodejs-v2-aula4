# Consultando o banco de dados via knex.js

- 20 minutos

## Definição

- assim como insert, update e delete, o select também tem suporte no builder

## Aplicação

- recuperar os dados do banco de dados. claro.

## Exemplo

```javascript
// hello-knex-5.js
const knex = require("./db");

knex("convidado").select().then(function(ret){
  console.log("id\t\tnome")
  let i = ret.length;
  while(i--){
    let conv = ret[i];
    console.log(`${conv.idconvidado}\t\t${conv.nomeconvidado}`);
  }
  process.exit(0);
});
```

- **knex("convidado").select()** equivale a **select * from convidado**

```javascript
// hello-knex-6.js
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
```

- a where do builder tem [vários outros idiomas possíveis](http://knexjs.org/#Builder-wheres)
- podemos encadear wheres
- podemos passar subconsultas para as wheres
- o builder suporta algumas sintaxes alternativas

```javascript
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
```

- caso o builder de modo algum lhe agrade, existe ainda a opção de usar SQL diretamente
- atenção para o dialeto SQL do sgbd
- sempre use variáveis nomeadas, jamais concatene SQL (evite o [bobby tables](https://xkcd.com/327/))
- no modo raw, o ret tem o atributo **rows**

## Exercício

- crie um insert usando *knex.raw* e chame de hello-knex-8.js
- você deve receber o nome que deseja incluir

[Voltar](../README.md)
