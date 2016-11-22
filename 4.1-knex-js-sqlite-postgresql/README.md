# Introdução ao knex.js

- 20 minutos
- dê checkout no repositório!

## Definição

- biblioteca node
- depende do npm para instalar
- [query builder](http://knexjs.org/)
- ajuda na consulta em bancos de dados
- compatível com mysql, postgresql, oracle, e sqlite3
- entender um query builder ajudará a entender melhor um ORM

## Aplicação

- aplicativos que usem bases relacionais para salvar dados
- atrelar interfaces a uma modelagem de negócio
- facilitar na hora de manter o código compatível com bancos distintos

## Exemplo

- passo inicial configurar um projeto via terminal
- crie este projeto na pasta do repositório da aula 4

```bash
mkdir intro-knex
cd intro-knex
npm init .
```

- o [npm](https://www.npmjs.com/) (Node Package Manager) gerencia projetos nodejs
- node por si só já tem módulos úteis
- o npm fornece mais de [200 mil pacotes](https://en.wikipedia.org/wiki/Npm_(software)#cite_note-KennedyDevay16-7)
- normalemte vem junto quando você instala o node
- o comando **"npm init ."** começa uma sessão de perguntas sobre o projeto sendo criado
- ao final das perguntas, a pasta do projeto terá um arquivo chamado **package.json**

```bash
npm install knex --save
npm install sqlite3 --save
```

- instalar dependências num projeto npm é só isso aí
- a parte do **"--save"** é pra salvar os pacotes no **package.json**, na seção de dependências
- abra e veja como o seu **package.json** está

## Exercício
