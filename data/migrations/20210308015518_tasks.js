
exports.up =  function(knex) {
    await knex.schema.createTable('tasks', (table) => {
        table.increments('task_id')
        table.text('task_description').notNull()
        table.text('task_notes')
        table.boolean('task_completed').defaultTo(false)
        table.text('project_id').notNull().references('project_id').inTable('projects')
      })
};

exports.down = function(knex) {
  
};
