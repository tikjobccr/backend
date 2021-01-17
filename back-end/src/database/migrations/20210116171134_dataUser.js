exports.up = function(knex) {
  knex.schema.createTable('user', function(table){
      table.integer('user_id').primary().unique();
      table.string('name').notNullable();
      table.srting('email').notNullable();
      table.srting('whatsapp').notNullable();
      table.srting('senha').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user')
};
