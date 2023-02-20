"use strict";

const { QueryTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("ordered_designs", "colour_id");
    await queryInterface.removeColumn("ordered_designs", "design_id");

    await queryInterface.addColumn("ordered_designs", "size", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.createTable("design_colours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      colour_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "colours",
          key: "id",
        },
      },
      design_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "designs",
          key: "id",
        },
      },
    });

    await queryInterface.addColumn("ordered_designs", "design_colours_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "design_colours",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("ordered_designs", "design_colours_id");
    await queryInterface.dropTable("design_colours");
    await queryInterface.removeColumn("ordered_desings", "size");
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
  },
};
