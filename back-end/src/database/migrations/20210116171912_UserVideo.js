exports.up = function(knex) {
    knex.schema.createTable('videos', function(table){
        table.increment();
        table.varchar('path');

        table.string('user_id').notNullable();
        
        table.foreing('user_id')
          .reference('id')
          .intable('user')
          .notNullable()
          .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('videos')
};
