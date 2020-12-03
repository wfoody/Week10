'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'Books',
      'author',
     Sequelize.STRING
    ),
    queryInterface.addColumn(
      'Books',
      'cover url',
     Sequelize.STRING
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.removeColumn(
      'Books',
      'author',
     Sequelize.STRING
    ),
    queryInterface.removeColumn(
      'Books',
      'cover url',
     Sequelize.STRING
    )
  }
};
