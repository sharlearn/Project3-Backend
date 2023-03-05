"use strict";

// removed buyer_id column in orders table
// inserted user_id column in orders table
// inserted status column in orders table

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // this is one change, this is the only correct migration!
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
