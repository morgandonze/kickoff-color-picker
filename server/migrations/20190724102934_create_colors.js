exports.up = function(knex) {
  return knex.schema.createTable("colors", function(table) {
    table.increments("id");
    table.integer("palette_id").unsigned();
    table.foreign("palette_id").references("palettes.id");
    table.integer("r").notNullable();
    table.integer("g").notNullable();
    table.integer("b").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("colors");
};
