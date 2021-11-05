"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Authors", [
      { name: "A. Lindgren", createdAt: new Date(), updatedAt: new Date() },
      { name: "J.K. Rowling", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dorian BUck", createdAt: new Date(), updatedAt: new Date() },
    ]);

    const astrid = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'A. Lindgren' LIMIT 1`
    );

    const rowling = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'J.K. Rowling' LIMIT 1`
    );

    const dorian = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'Dorian Buck' LIMIT 1`
    );

    await queryInterface.bulkInsert("Books", [
      {
        title: "Pippi Longstocking",
        AuthorId: astrid[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Books", [
      {
        title: "Harry Potter",
        AuthorId: astrid[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Books", [
      {
        title: "The Greatest",
        AuthorId: astrid[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
