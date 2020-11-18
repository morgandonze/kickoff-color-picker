exports.up = function (knex) {
  return knex.schema.createTable("palettes", function(table) {
      table.increments("id")
      table.string("palette", 255).notNullable()
  })
};

exports.down = function (knex) {
    return knex.schema.dropTable("palettes")
};
