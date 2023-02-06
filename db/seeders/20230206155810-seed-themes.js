"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("themes", [
      {
        theme: "Food",
      },
      {
        theme: "Nature",
      },
      {
        theme: "Typography",
      },
      {
        theme: "Tattoo",
      },
      {
        theme: "Science",
      },
      {
        theme: "Gaming",
      },
      {
        theme: "Animals",
      },
      {
        theme: "Abstract",
      },
      {
        theme: "Cute",
      },
      {
        theme: "Space",
      },
      {
        theme: "Ocean",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("themes", null, {});
  },
};
