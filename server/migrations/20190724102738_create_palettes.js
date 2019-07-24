exports.up = function(knex) {
  return knex.schema.createTable("palettes", function(table) {
    table.increments("id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("palettes");
};
