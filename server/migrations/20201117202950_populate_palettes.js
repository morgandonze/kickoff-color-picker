
exports.up = function(knex) {
    return knex("palettes").insert([
        {palette: "ff6d42,bada55,cccccc"}
    ])
};

exports.down = function(knex) {
    return knex("palettes").delete()
};
