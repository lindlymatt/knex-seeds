'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('musicians').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('musicians').insert({
          id: 1,
          concert_id: 1,
          name: 'Daniel Bailey',
          age: 52
        }),
        knex('musicians').insert({
          id: 2,
          concert_id: 1,
          name: 'Heidi McGuire',
          age: 30
        }),
        knex('musicians').insert({
          id: 3,
          concert_id: 2,
          name: 'Corey Reyes',
          age: 26
        }),
        knex('musicians').insert({
          id: 4,
          concert_id: 2,
          name: 'Kristi Sheridan',
          age: 45
        })
      ]);
    });
};
