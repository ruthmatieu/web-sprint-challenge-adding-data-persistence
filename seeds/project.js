
exports.seed = function(knex) {

  return knex('project').insert([
        {project_id: 1, project_name: 'BugTester', project_description: 'Tests for bugs', project_completed: true},
        {project_id: 2, project_name: 'UI/UX', project_description: '', project_completed: false},
        {project_id: 3, project_name: 'Server Builder', project_description: '', project_completed: false}
      ]);
};
