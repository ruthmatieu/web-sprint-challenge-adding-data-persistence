
exports.seed = function(knex) {

  return knex('project_resources').insert([
        {project_id: 1, resources_id: 1, completedBy: '2019-02-23'}
      ]);

};
