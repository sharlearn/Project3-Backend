"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("design_themes", {
      theme_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "themes",
          key: "id",
        },
        allowNull: false,
      },
      design_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "designs",
          key: "id",
        },
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });

    await queryInterface.createTable("ordered_designs", {
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
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("design_themes");
    await queryInterface.dropTable("ordered_designs");
  },
};
