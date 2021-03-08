
exports.up = async function(knex) {
    await knex.schema.createTable('project_resources', (table) => {
        table
          .integer('project_id')
          .notNull()
          .references('project_id')
          .inTable('project')
    
        table
          .integer('resources_id')
          .notNull()
          .references('resources_id')
          .inTable('resources')
        table.date('completedBy').notNull().defaultTo(knex.raw("current_timestamp"))
        table.primary(["project_id", "resources_id"])
      })
};

exports.down = function(knex) {
  
};
