exports.up = function(knex) {
  return knex("greetings").insert([{ body: "Welcome to Kudos Color Picker!" }]);
};

exports.down = function(knex) {
  return knex("greetings").delete();
};
