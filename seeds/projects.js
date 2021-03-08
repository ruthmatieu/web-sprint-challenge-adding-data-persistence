exports.seed = function(knex) {

  return knex('projects').insert([
        {project_name: 'BugTester', project_description: 'Tests for bugs', project_completed: false},
        {project_name: 'UI/UX', project_description: 'what', project_completed: false},
        {project_name: 'Server Builder', project_description: 'nothing', project_completed: false}
      ]);
};
