
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'FSW1'},
        {name: 'iOS5'},
        {name: 'FSWPT3'}
      ]);
    });
};