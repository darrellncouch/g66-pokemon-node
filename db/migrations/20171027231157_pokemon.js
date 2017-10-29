
exports.up = function(knex, Promise) {
  return knex.schema.createTable("pokemon" , (table)=>{
    table.increments();
    table.string('name')
    table.integer('trainer_id')
      .notNullable()
      .references('id')
      .inTable('trainers')
      .onDelete('CASCADE')
      .index();
    table.integer('cp')
    table.boolean('in_gym')
    table.string('img_link')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
