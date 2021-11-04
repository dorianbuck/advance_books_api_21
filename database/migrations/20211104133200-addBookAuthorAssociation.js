"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addcolumn("books", "AuthorId", {
      type: Sequelize.INTEGER,
      references: { model: "Authors", as: "author", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
