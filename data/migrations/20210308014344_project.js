
exports.up = async function(knex) {
  await knex.schema.createTable('project', (table) => {
      table.increments('project_id')
      table.text('project_name').notNull()
      table.text('project_description')
      table.boolean('project_completed').defaultTo(false)
  });

  await knex.schema.createTable('resources', (table) => {
    table.increments('resources_id')
    table.text('resource_name').notNull().unique()
    table.text('resource_description')
  });

  await knex.schema.createTable('tasks', (table) => {
    table.increments('task_id')
    table.text('task_description').notNull()
    table.text('task_notes')
    table.boolean('task_completed').defaultTo(false)
    table.text('project_id').notNull().references('project_id').inTable('projects')
})

};

exports.down = async function(knex) {

};
