"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // nice use of bulkinsert!
    await queryInterface.bulkInsert("users", [
      {
        id: "a4ac0d81-5389-4fd8-8b06-1827d376c777",
        username: "robertk",
        first_name: "Robert",
        last_name: "Kolsek",
        email: "robertk@gmail.com",
      },
      {
        id: "16026ef0-3011-40dd-884a-54dda5bb7c6e",
        username: "sharlenl",
        first_name: "Sharlen",
        last_name: "Liew",
        email: "sharlenl@gmail.com",
      },
      {
        id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
        username: "nicolal",
        first_name: "Nicola",
        last_name: "Lew",
        email: "nicolal@gmail.com",
      },
      {
        id: "f3a8f50d-c107-4676-9478-b9c56f642de8",
        username: "foongl",
        first_name: "Foong",
        last_name: "Leung",
        email: "foongl@gmail.com",
      },
      {
        id: "49d1d080-2c1a-4c23-909f-75ddbbbabbec",
        username: "chaieel",
        first_name: "Chai Ee",
        last_name: "Loy",
        email: "chaieel@gmail.com",
      },
      {
        id: "387b708f-edbe-48d1-a2f4-4f7f4aad498e",
        username: "minshanl",
        first_name: "Min Shan",
        last_name: "Liew",
        email: "minshanl@gmail.com",
      },
      {
        id: "c03ade38-288f-4559-9058-6c8e9fee0773",
        username: "nicholasl",
        first_name: "Nicholas",
        last_name: "Lye",
        email: "nicholasl@gmail.com",
      },
      {
        id: "3360b954-0d20-4444-8a75-3e9bc1c6c39e",
        username: "khairula",
        first_name: "Khairul",
        last_name: "Abdullah",
        email: "khairula@gmail.com",
      },
      {
        id: "eba46302-8e69-4edf-a720-a05b696bfe57",
        username: "samo",
        first_name: "Sam",
        last_name: "O'Shaughnessy",
        email: "samo@gmail.com",
      },
      {
        id: "a37a3442-8db1-4597-b64d-071770bab32c",
        username: "yujif",
        first_name: "Yuji",
        last_name: "Fujinami",
        email: "yujif@gmail.com",
      },
      {
        id: "58d3147a-50cc-4b3e-8104-353eec247b8c",
        username: "kain",
        first_name: "Kai",
        last_name: "Neo",
        email: "kain@gmail.com",
      },
      {
        id: "e02624ca-837d-4708-9276-74d4158f632a",
        username: "johnt",
        first_name: "John",
        last_name: "Tan",
        email: "johnt@gmail.com",
      },
      {
        id: "7289aa0b-4177-4ac9-875c-7692e84c0228",
        username: "sandral",
        first_name: "Sandra",
        last_name: "Li",
        email: "sandral@gmail.com",
      },
      {
        id: "2b880649-0329-4b32-a791-7a5f13bf46f9",
        username: "adamy",
        first_name: "Adam",
        last_name: "Yeo",
        email: "adamy@gmail.com",
      },
      {
        id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
        username: "gregorys",
        first_name: "Gregory",
        last_name: "Soh",
        email: "gregorys@gmail.com",
      },
    ]);

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
    await queryInterface.bulkDelete("users");
    await queryInterface.bulkDelete("colours", null, {});
    await queryInterface.bulkDelete("themes", null, {});
  },
};
