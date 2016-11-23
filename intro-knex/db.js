const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./hello.sqlite"
  },
  useNullAsDefault: true // ¯\_(ツ)_/¯
});
module.exports = knex;
