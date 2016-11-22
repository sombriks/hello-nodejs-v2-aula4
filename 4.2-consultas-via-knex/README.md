# Consultando o banco de dados via knex.js

- 20 minutos

## Definição

- assim como insert, update e delete, o select também tem suporte no builder

## Aplicação

- recuperar os dados do banco de dados. claro.

## Exemplo

```javascript
// hello-knex-5.js
var knex = require("./db");

knex("convidado").select().then(function(ret){
  console.log("id\t\tnome")
  var i = ret.length;
  while(i--){
    var conv = ret[i];
    console.log(`${conv.idconvidado}\t\t${conv.nomeconvidado}`);
  }
  process.exit(0);
});
```

- **knex("convidado").select()** equivale a **select * from convidado**

```javascript
// hello-knex-6.js
var knex = require("./db");

if(!process.argv[2]){
  console.log("usage: node hello-knex-6.js <id>");
  process.exit(0);
}

knex("convidado").select().where({
  idconvidado:process.argv[2]
}).then(function(ret){
  console.log("id\t\tnome")
  var i = ret.length;
  while(i--){
    var conv = ret[i];
    console.log(conv);
  }
  process.exit(0);
});
```

- a where do builder tem [vários outros idiomas possíveis](http://knexjs.org/#Builder-wheres)
- podemos encadear wheres
- podemos passar subconsultas para as wheres



## Exercício

- transforme as consultas feitas com o *builder* em consultas *knex.raw*

[Voltar](../README.md)