
exports.up = async function(knex) {
  await knex.schema.createTable('project', (table) => {
      table.increments('project_id')
      table.text('project_name').notNull()
      table.text('project_description')
      table.boolean('project_completed').defaultTo(false)
  });

};

exports.down = async function(knex) {
};
