'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.removeColumn(
      'Books',
      'cover url',
     Sequelize.STRING
    ),
    queryInterface.addColumn(
      'Books',
      'coverUrl',
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
    return queryInterface.addColumn(
      'Books',
      'cover url',
     Sequelize.STRING
    ),
    queryInterface.removeColumn(
      'Books',
      'coverUrl',
     Sequelize.STRING
    )
  }
};
