exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
        {resource_id: 1, resource_name: 'rowValue1'},
        {resource_id: 2, resource_name: 'rowValue2'},
        {resource_id: 3, resource_name: 'rowValue3', resource_description: 'N/A'}
      ]);
};
