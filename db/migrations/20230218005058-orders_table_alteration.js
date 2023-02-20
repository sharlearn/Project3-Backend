"use strict";

// removed buyer_id column in orders table
// inserted user_id column in orders table
// inserted status column in orders table

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("orders", "status", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("orders", "status");
  },
};
