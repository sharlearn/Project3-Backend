"use strict";

const { QueryTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("design_colours", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      design_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "designs",
          key: "id",
        },
      },
      colour_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "colours",
          key: "id",
        },
      },
    });

    await queryInterface.removeColumn("ordered_designs", "colour_id");
    await queryInterface.removeColumn("ordered_designs", "design_id");

    await queryInterface.addColumn("ordered_designs", "size", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn("ordered_designs", "design_colours_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn("ordered_designs", "id", {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("ordered_designs", "design_colours_id");
    await queryInterface.removeColumn("ordered_designs", "size");
    await queryInterface.addColumn("ordered_designs", "design_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "designs",
        key: "id",
      },
      allowNull: false,
    });
    await queryInterface.addColumn("ordered_designs", "colour_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "colours",
        key: "id",
      },
    });
    await queryInterface.dropTable("design_colours");
  },
};
