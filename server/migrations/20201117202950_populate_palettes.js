
exports.up = function(knex) {
    return knex("palettes").insert([
        {palette: "#ffffff, #000000, #cccccc"}
    ])
};

exports.down = function(knex) {
    return knex("palettes").delete()
};
