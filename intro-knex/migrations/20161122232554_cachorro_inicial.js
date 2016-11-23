
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("cachorro", (table) => {
    table.increments("idcachorro");
    table.string("nomecachorro");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cachorro");
};
