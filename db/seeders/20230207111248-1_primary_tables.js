"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        username: "robertk",
        password: "ilovemykid",
        first_name: "Robert",
        last_name: "Kolsek",
        email: "robertk@gmail.com",
      },
      {
        username: "sharlenl",
        password: "hello123",
        first_name: "Sharlen",
        last_name: "Liew",
        email: "sharlenl@gmail.com",
      },
      {
        username: "nicolal",
        password: "ilovemydog",
        first_name: "Nicola",
        last_name: "Lew",
        email: "nicolal@gmail.com",
      },
      {
        username: "foongl",
        password: "password456",
        first_name: "Foong",
        last_name: "Leung",
        email: "foongl@gmail.com",
      },
      {
        username: "chaieel",
        password: "abcde",
        first_name: "Chai Ee",
        last_name: "Loy",
        email: "chaieel@gmail.com",
      },
      {
        username: "minshanl",
        password: "welcome",
        first_name: "Min Shan",
        last_name: "Liew",
        email: "nicolal@gmail.com",
      },
      {
        username: "nicholasl",
        password: "helloworld",
        first_name: "Nicholas",
        last_name: "Lye",
        email: "nicholasl@gmail.com",
      },
      {
        username: "nicolal",
        password: "ilovebbt",
        first_name: "Nicola",
        last_name: "Lew",
        email: "nicolal@gmail.com",
      },
      {
        username: "samo",
        password: "rocketacademy",
        first_name: "Sam",
        last_name: "O'Shaughnessy",
        email: "samo@gmail.com",
      },
      {
        username: "yujif",
        password: "ilovecoding",
        first_name: "Yuji",
        last_name: "Fujinami",
        email: "yujif@gmail.com",
      },
      {
        username: "kain",
        password: "iloverocket",
        first_name: "Kai",
        last_name: "Neo",
        email: "kain@gmail.com",
      },
      {
        username: "johnt",
        password: "ilovenumbers",
        first_name: "John",
        last_name: "Tan",
        email: "johnt@gmail.com",
      },
      {
        username: "sandral",
        password: "ilovecats",
        first_name: "Sandra",
        last_name: "Li",
        email: "sandral@gmail.com",
      },
      {
        username: "adamy",
        password: "ilovetrees",
        first_name: "Adam",
        last_name: "Yeo",
        email: "adamy@gmail.com",
      },
      {
        username: "gregorys",
        password: "ilovehamsters",
        first_name: "Gregory",
        last_name: "Soh",
        email: "gregorys@gmail.com",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users");
  },
};
