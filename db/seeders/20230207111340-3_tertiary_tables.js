"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("design_themes", [
      {
        design_id: 1,
        theme_id: 2,
      },
      {
        design_id: 2,
        theme_id: 2,
      },
      {
        design_id: 3,
        theme_id: 2,
      },
      {
        design_id: 4,
        theme_id: 7,
      },
      {
        design_id: 5,
        theme_id: 1,
      },
      {
        design_id: 6,
        theme_id: 7,
      },
      {
        design_id: 7,
        theme_id: 7,
      },
      {
        design_id: 8,
        theme_id: 1,
      },
      {
        design_id: 9,
        theme_id: 2,
      },
      {
        design_id: 10,
        theme_id: 7,
      },
      {
        design_id: 11,
        theme_id: 7,
      },
      {
        design_id: 12,
        theme_id: 1,
      },
      {
        design_id: 13,
        theme_id: 5,
      },
      {
        design_id: 14,
        theme_id: 5,
      },
      {
        design_id: 15,
        theme_id: 11,
      },
      {
        design_id: 16,
        theme_id: 11,
      },
      {
        design_id: 17,
        theme_id: 11,
      },
      {
        design_id: 18,
        theme_id: 11,
      },
      {
        design_id: 19,
        theme_id: 11,
      },
      {
        design_id: 20,
        theme_id: 11,
      },
      {
        design_id: 21,
        theme_id: 11,
      },
      {
        design_id: 22,
        theme_id: 11,
      },
      {
        design_id: 23,
        theme_id: 7,
      },
      {
        design_id: 24,
        theme_id: 7,
      },
      {
        design_id: 25,
        theme_id: 7,
      },
      {
        design_id: 26,
        theme_id: 7,
      },
      {
        design_id: 27,
        theme_id: 7,
      },
      {
        design_id: 28,
        theme_id: 7,
      },
      {
        design_id: 29,
        theme_id: 7,
      },
      {
        design_id: 30,
        theme_id: 7,
      },
      {
        design_id: 31,
        theme_id: 6,
      },
      {
        design_id: 32,
        theme_id: 6,
      },
      {
        design_id: 33,
        theme_id: 6,
      },
      {
        design_id: 34,
        theme_id: 6,
      },
      {
        design_id: 35,
        theme_id: 6,
      },
      {
        design_id: 36,
        theme_id: 6,
      },
      {
        design_id: 37,
        theme_id: 6,
      },
      {
        design_id: 38,
        theme_id: 6,
      },
      {
        design_id: 39,
        theme_id: 10,
      },
      {
        design_id: 40,
        theme_id: 10,
      },
      {
        design_id: 41,
        theme_id: 10,
      },
      {
        design_id: 42,
        theme_id: 10,
      },
      {
        design_id: 43,
        theme_id: 1,
      },
      {
        design_id: 44,
        theme_id: 1,
      },
      {
        design_id: 45,
        theme_id: 1,
      },
      {
        design_id: 46,
        theme_id: 10,
      },
      {
        design_id: 47,
        theme_id: 5,
      },
      {
        design_id: 48,
        theme_id: 7,
      },
      {
        design_id: 49,
        theme_id: 5,
      },
      {
        design_id: 50,
        theme_id: 5,
      },
      {
        design_id: 51,
        theme_id: 5,
      },
      {
        design_id: 52,
        theme_id: 3,
      },
      {
        design_id: 53,
        theme_id: 4,
      },
      {
        design_id: 54,
        theme_id: 4,
      },
      {
        design_id: 55,
        theme_id: 8,
      },
      {
        design_id: 56,
        theme_id: 3,
      },
      {
        design_id: 57,
        theme_id: 3,
      },
      {
        design_id: 58,
        theme_id: 3,
      },
      {
        design_id: 59,
        theme_id: 4,
      },
      {
        design_id: 60,
        theme_id: 2,
      },
      {
        design_id: 61,
        theme_id: 10,
      },
      {
        design_id: 62,
        theme_id: 2,
      },
      {
        design_id: 63,
        theme_id: 2,
      },
      {
        design_id: 64,
        theme_id: 9,
      },
      {
        design_id: 65,
        theme_id: 9,
      },
      {
        design_id: 66,
        theme_id: 6,
      },
      {
        design_id: 67,
        theme_id: 2,
      },
      {
        design_id: 68,
        theme_id: 6,
      },
      {
        design_id: 69,
        theme_id: 8,
      },
      {
        design_id: 70,
        theme_id: 3,
      },
      {
        design_id: 71,
        theme_id: 3,
      },
      {
        design_id: 72,
        theme_id: 3,
      },
      {
        design_id: 73,
        theme_id: 9,
      },
      {
        design_id: 74,
        theme_id: 3,
      },
      {
        design_id: 75,
        theme_id: 3,
      },
      {
        design_id: 76,
        theme_id: 3,
      },
      {
        design_id: 77,
        theme_id: 3,
      },
      {
        design_id: 78,
        theme_id: 9,
      },
      {
        design_id: 79,
        theme_id: 3,
      },
      {
        design_id: 80,
        theme_id: 3,
      },
      {
        design_id: 81,
        theme_id: 3,
      },
      {
        design_id: 82,
        theme_id: 3,
      },
      {
        design_id: 83,
        theme_id: 3,
      },
      {
        design_id: 84,
        theme_id: 3,
      },
      {
        design_id: 85,
        theme_id: 3,
      },
      {
        design_id: 86,
        theme_id: 9,
      },
      {
        design_id: 87,
        theme_id: 7,
      },
      {
        design_id: 88,
        theme_id: 9,
      },
      {
        design_id: 89,
        theme_id: 9,
      },
      {
        design_id: 90,
        theme_id: 9,
      },
      {
        design_id: 91,
        theme_id: 9,
      },
      {
        design_id: 92,
        theme_id: 9,
      },
      {
        design_id: 93,
        theme_id: 9,
      },
      {
        design_id: 94,
        theme_id: 11,
      },
      {
        design_id: 95,
        theme_id: 11,
      },
      {
        design_id: 96,
        theme_id: 11,
      },
      {
        design_id: 97,
        theme_id: 7,
      },
      {
        design_id: 98,
        theme_id: 7,
      },
      {
        design_id: 99,
        theme_id: 7,
      },
      {
        design_id: 100,
        theme_id: 7,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("design_themes", null, {});
  },
};
