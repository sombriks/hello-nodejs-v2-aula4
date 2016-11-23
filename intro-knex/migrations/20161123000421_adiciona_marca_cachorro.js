
exports.up = function(knex, Promise) {
  return knex.schema.alterTable("cachorro", table => {
    table.string("marcacachorro");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("cachorro", table => table.dropColumn("marcacachorro"));
};
