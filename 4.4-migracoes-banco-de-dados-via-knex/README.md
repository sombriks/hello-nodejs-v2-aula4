# Introdução a migrações de banco de dados com knex

- 25 minutos

## Definição

- esquema é uma forma de organizar o banco de maneira lógica
- essa organização ~~pode~~ vai mudar. colunas deixarão de existir e outras serão criadas
- como manter os esquemas organizados?
- ~~tinder~~ **migrações** de esquemas :bowtie:

## Aplicação

- alterando tabelas
- mudando de ideia

## Exemplo

- criar tabela cachorro (aula 3)

com SQL:

```javascript
create table cachorro(
  idcachorro integer not null primary key,
  nomecachorro varchar(255) not null,
  racacachorro varchar(255)
);
```

com knex:

```bash
$ knex init
$ knex migrate:make cachorro_inicial
```

`$ knex init` cria um arquivo `knexfile.js`, que nada mais é do que o nosso conhecido `db.js` *on steroids*

```
.
├── db.js
├── hallo-knex-1.js
├── hallo-knex-2.js
├── hallo-knex-3.js
├── hallo-knex-4.js
├── hallo-knex-5.js
├── hallo-knex-6.js
├── hallo-knex-7.js
├── hello.sqlite
├── knexfile.js
├── migrations
│   └── 20161122232554_cachorro_inicial.js
├── node_modules
│   ├── knex
│   └── sqlite3
└── package.json
```

a pasta **migrations** é onde a magia acontece

```javascript
// 20161122232554_cachorro_inicial.js
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("cachorro", (table) => {
    table.increments("idcachorro");
    table.string("nomecachorro");
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists("cachorro");
};
```

`$ knex migrate:latest` -- subindo..

```bash
.
├── db.js
├── dev.sqlite3
...
```

iniciando o banco com tótó:

```javascript
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
```

ops! esquecemos de escolher a marca do cachorro:

`$ knex migrate:make adiciona_marca_cachorro`

```javascript
// 20161123000421_adiciona_marca_cachorro.js
exports.up = function(knex, Promise) {
  return knex.schema.alterTable("cachorro", table => {
    table.string("marcacachorro");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("cachorro", table => dropColumn("marcacachorro"));
};
```

`$ knex migrate:latest`

agora nosso tótó tem marca

mudou de ideia? *rollback, babe*

`$ knex migrate:rollback` desfaz o último migrate que fizemos

## Exercício

- tenham estes scripts todos no github de vocês!

[Voltar](../README.md)
