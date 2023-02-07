"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("colours", [
      {
        colour: "Black",
      },
      {
        colour: "White",
      },
      {
        colour: "Grey",
      },
      {
        colour: "Blue",
      },
      {
        colour: "Navy",
      },
      {
        colour: "Red",
      },
      {
        colour: "Pink",
      },
      {
        colour: "Green",
      },
      {
        colour: "Olive",
      },
      {
        colour: "Yellow",
      },
      {
        colour: "Orange",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colours", null, {});
  },
};
