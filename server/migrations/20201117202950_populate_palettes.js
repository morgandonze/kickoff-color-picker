
exports.up = function(knex) {
    return knex("palettes").insert([
        {palette: "#ba189d, #6effff, #ffff72"}
    ])
};

exports.down = function(knex) {
    return knex("palettes").delete()
};
