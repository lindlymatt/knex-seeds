'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('concerts', table => {
    // Create columns for id, name and price.
    table.increments();
    table.text('name');
    table.decimal('price', 10, 2);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('concerts');
};
