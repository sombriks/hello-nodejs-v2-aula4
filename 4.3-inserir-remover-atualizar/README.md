# Inserir, remover e atualizar dados no banco

- 15 minutos

## Definição

- as operações básicas do SQL vistas na Aula 3 podem ser executadas por um javascript
- em vez de alimentarmos diretamente nossa base de dados, façamos um ou vários programas para cumprirem esta missão

## Aplicação

- seu programa alimenta uma base de dados que lhe permitirá criar consultas complexas no futuro
- seu programa pode otimizar determinadas tarefas de coleta de dados

## Exemplo

```javascript
// hello-knex-1.js
var knex = require("knex")({
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
```

- primeiro definimos os parâmetros de conexão na criação do query builder
- nosso banco é um sqlite e o arquivo de banco se chama *hello.sqlite*
- depois usamos o query builder pra criar uma tabela chamada *convidado*
- a tabela tem duas colunas: *idconvidado* e *nomecovidado*
- o knex também é de natureza assíncrona, mas usa [promessas em vez de callbacks](http://bluebirdjs.com/docs/why-promises.html)
- esse javascript manipula sql. ele herda certas características vistas no sql
- rodar uma segunda vez dá erro, por exemplo

```javascript
// hello-knex-2.js
var knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./hello.sqlite"
  }
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
  console.log("convidado inserido com a chave %s",ret[0]);
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});
```

- o código lembra mais javascript do que sql
- você pode conferir seus dados com o **db browser** visto na aula 3
- aquela parte de configurar o banco é sempre igual

```javascript
// db.js
var knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./hello.sqlite"
  }
});
module.exports = knex;
```

- nos demais exemplos faremos require no arquivo **db.js**
- **require("./db")**

```javascript
// hello-knex-3.js
var knex = require("./db");

if(!process.argv[3]){
  console.log("usage: node hello-knex-3.js <id> <nome>");
  process.exit(0);
}

let id = process.argv[2];
let nome = process.argv[3];

// atualizar convidados
knex("convidado").update({
  nomeconvidado:nome
}).where({
  idconvidado:id
}).then((ret) => {
  console.log("convidado %s renomeado para %s",id,nome);
  process.exit(0);
}).catch(function(err){// caso você goste mais desta sintaxe
  console.log(err);
  process.exit(1);
});
```

- o knex tenta preservar a ideia original dos verbos do SQL
- a [documentação oficial](http://knexjs.org/) tem exemplos caso a caso
- [outros tutoriais](https://github.com/sombriks/sample-knex-cookbook) tem uma tentativa de sequencia

```javascript
// hello-knex-4.js
var knex = require("./db");

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
```

- ao mudarmos, por exemplo, o sgbd de sqlite para postgresql, só o arquivo db.js necessitaria de mudança
- os demais scripts fazem uso da API do query builder em vez de usar o dialeto SQL do sqlite diretamente

## Exercício

- altere os scripts **hello-knex-1.js** e **hello-knex-2.js** para fazerem uso do **db.js**
- comite suas alterações para o github

[Voltar](../README.md)
