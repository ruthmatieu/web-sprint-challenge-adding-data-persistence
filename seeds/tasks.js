
exports.seed = async function(knex) {

  await knex('tasks').insert([
        {task_id: 1, task_description: 'rowValue1', task_notes: '', task_completed: false},
        {task_id: 2, task_description: 'rowValue2', task_notes: '', task_completed: false},
        {task_id: 3, task_description: 'rowValue3', task_notes: '', task_completed: false}
      ]);
};
