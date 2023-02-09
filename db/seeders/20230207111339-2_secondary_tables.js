"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_addresses", [
      {
        user_id: "a4ac0d81-5389-4fd8-8b06-1827d376c777",
        type: "mailing",
        address: "64D Kallang Pudding Road 04-00 Tannery Building",
      },
      {
        user_id: "16026ef0-3011-40dd-884a-54dda5bb7c6e",
        type: "mailing",
        address: "336 Smith Street #05-308 New Bridge Centre",
      },
      {
        user_id: "16026ef0-3011-40dd-884a-54dda5bb7c6e",
        type: "billing",
        address: "43 Jalan Merah Saga #02-70",
      },
      {
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
        type: "mailing",
        address: "40 Horne Road Meyson Building",
      },
      {
        user_id: "f3a8f50d-c107-4676-9478-b9c56f642de8",
        type: "mailing",
        address: "100 Lor 23 Geylang #05-03",
      },
      {
        user_id: "49d1d080-2c1a-4c23-909f-75ddbbbabbec",
        type: "mailing",
        address: "205 River Valley Road #01-76",
      },
      {
        user_id: "49d1d080-2c1a-4c23-909f-75ddbbbabbec",
        type: "mailing",
        address: "190 Middle Road, #15-02, Fortune Centre",
      },
      {
        user_id: "387b708f-edbe-48d1-a2f4-4f7f4aad498e",
        type: "mailing",
        address: "Blk 2021 Bukit Batok Street 23, 01-216",
      },
      {
        user_id: "387b708f-edbe-48d1-a2f4-4f7f4aad498e",
        type: "billing",
        address: "Blk 2021 Bukit Batok Street 23, 01-216",
      },
      {
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
        type: "mailing",
        address: "261 Waterloo Street Waterloo Centre #04-37 Waterloo Centre",
      },
      {
        user_id: "3360b954-0d20-4444-8a75-3e9bc1c6c39e",
        type: "mailing",
        address: "325A Beach Road",
      },
      {
        user_id: "eba46302-8e69-4edf-a720-a05b696bfe57",
        type: "mailing",
        address: "19 Burn Rd #05-01",
      },
      {
        user_id: "a37a3442-8db1-4597-b64d-071770bab32c",
        type: "mailing",
        address: "564A Balestier Rd",
      },
      {
        user_id: "58d3147a-50cc-4b3e-8104-353eec247b8c",
        type: "mailing",
        address: "14 Fan Yoong Road",
      },
      {
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
        type: "mailing",
        address: "350 Orchard Road #11-08 Shaw House",
      },
      {
        user_id: "7289aa0b-4177-4ac9-875c-7692e84c0228",
        type: "mailing",
        address: "Kewalram Hillview 120 Hillview Avenue #05-01",
      },
      {
        user_id: "2b880649-0329-4b32-a791-7a5f13bf46f9",
        type: "mailing",
        address: "391B Orchard Road #23-01",
      },
      {
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
        type: "mailing",
        address: "German Centre 25 International Business Park #03-77",
      },
    ]);

    await queryInterface.bulkInsert("designs", [
      {
        design_name: "Starry Cloud",
        description: "Grey cloud, raining stars.",
        image_url:
          "https://cdn.pixabay.com/photo/2022/12/31/17/38/clouds-7689100_960_720.jpg",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Blue Flowers",
        description: "Cute blue flowers.",
        image_url:
          "https://cdn.pixabay.com/photo/2022/09/24/07/32/flowers-7475758_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Flowers",
        description: "Simple flower design.",
        image_url:
          "https://cdn.pixabay.com/photo/2017/05/25/09/22/flower-2342706_960_720.jpg",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Cat Sketch",
        description: "Cute drawing of cat.",
        image_url:
          "https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Avocado",
        description: "Sketch of avocado.",
        image_url:
          "https://cdn.pixabay.com/photo/2023/01/26/18/12/avocado-7746732_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Lion Sketch",
        description: "Cute drawing of lion",
        image_url:
          "https://cdn.pixabay.com/photo/2022/02/20/09/34/animal-7024072_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Panda",
        description: "Pandaaaa...",
        image_url:
          "https://cdn.pixabay.com/photo/2022/02/20/09/36/animal-7024080_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Cuppa",
        description: "Coffee.",
        image_url:
          "https://cdn.pixabay.com/photo/2022/09/08/17/15/cafe-7441432_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Cactus",
        description: "Sketch of cactus plant.",
        image_url:
          "https://cdn.pixabay.com/photo/2020/11/11/05/31/cactus-5731558_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Good Boy",
        description: "Drawing of my dog.",
        image_url:
          "https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Bee",
        description: "Busy bee",
        image_url:
          "https://cdn.pixabay.com/photo/2015/04/03/16/36/bee-705412_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Eggs on Rice",
        description: "What I ate today.",
        image_url:
          "https://cdn.pixabay.com/photo/2022/08/12/17/08/food-7382109_960_720.jpg",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Left Brain, Right Brain",
        description: "Brains are brains.",
        image_url:
          "https://cdn.pixabay.com/photo/2017/02/13/08/54/brain-2062057_960_720.jpg",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Android",
        description: "Futuristic android.",
        image_url:
          "https://cdn.pixabay.com/photo/2022/09/25/23/28/android-7479380_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Lighthouse",
        description: "Lighthouse",
        image_url:
          "https://cdn.pixabay.com/photo/2022/10/06/22/00/lighthouse-7503645_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Lighthouse by the Sea",
        description: "Lighthouse, waves",
        image_url:
          "https://cdn.pixabay.com/photo/2022/10/06/22/00/lighthouse-7503646_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Galleon",
        description: "Galleon illustration.",
        image_url:
          "https://cdn.pixabay.com/photo/2014/04/03/10/01/ship-309618_960_720.png",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Seahorse",
        description: "Seahorse illustration.",
        image_url:
          "https://cdn.pixabay.com/photo/2019/08/10/12/49/seahorse-4396856_960_720.png",
        price: 8,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Whale Tail",
        description: "Photo of whale tail.",
        image_url:
          "https://images.unsplash.com/photo-1570913179118-f3d24be1d1f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1543&q=80",
        price: 10,
        user_id: "5f3822fb-df88-4f08-960c-9d2912ca5608",
      },
      {
        design_name: "Humpback",
        description: "Whale.",
        image_url:
          "https://cdn.pixabay.com/photo/2022/11/12/16/09/humpback-whale-7587322_960_720.png",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Jellyfishes",
        description: "Floating around.",
        image_url:
          "https://images.unsplash.com/photo-1495012379376-194a416fcc5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Red Octopus",
        description: "Looking sinister.",
        image_url:
          "https://images.unsplash.com/photo-1616616839548-839c5ae0da00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Dog on Yellow",
        description: "Dog with yellow background.",
        image_url:
          "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Dog on Black",
        description: "Dog with black background.",
        image_url:
          "https://images.unsplash.com/photo-1477936432016-8172ed08637e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Hat Pug",
        description: "Pug wearing yellow hat.",
        image_url:
          "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Big Mouth",
        description: "Dog with mouth open.",
        image_url:
          "https://images.unsplash.com/photo-1546689999-e1db7c13ef06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Flappy Ears",
        description: "Dog with ears flapping around.",
        image_url:
          "https://images.unsplash.com/photo-1549368983-2e8a5d2cb987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Ears",
        description: "Brown dog with ears perked up.",
        image_url:
          "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price: 10,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "White Cat",
        description: "White cat.",
        image_url:
          "https://images.unsplash.com/photo-1533568367292-63cab2810e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Black Cat",
        description: "Black cat.",
        image_url:
          "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Yellow Gameboy",
        description: "Yellow Gameboy.",
        image_url:
          "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Blue Gameboy",
        description: "Blue Gameboy",
        image_url:
          "https://images.unsplash.com/photo-1531525797753-909788106ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Purple Gameboy",
        description: "Purple Gameboy",
        image_url:
          "https://images.unsplash.com/photo-1531525727990-67532cd332c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Blue Dualshock",
        description: "Blue Dualshock",
        image_url:
          "https://images.unsplash.com/photo-1592838884470-0415caecffd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Red Dualshock",
        description: "Red Dualshock",
        image_url:
          "https://images.unsplash.com/photo-1592839719941-8e2651039d01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Snes Controller",
        description: "Snes controller.",
        image_url:
          "https://cdn.pixabay.com/photo/2020/05/24/12/13/snes-5214011_960_720.png",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Switch",
        description: "Switch console.",
        image_url:
          "https://cdn.pixabay.com/photo/2020/05/15/08/28/switch-5172817_960_720.png",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Pokeball",
        description: "Pokemon",
        image_url:
          "https://cdn.pixabay.com/photo/2016/07/13/08/31/pokemon-1513925_960_720.jpg",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Astronaut",
        description: "Astronaut illustration",
        image_url:
          "https://images.unsplash.com/photo-1570260918970-001c33fc800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Detached",
        description: "Astronaut in trouble.",
        image_url:
          "https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
        price: 11,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Moon",
        description: "Moon",
        image_url:
          "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80",
        price: 13,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Astro Cat",
        description: "Astronaut Cat",
        image_url:
          "https://cdn.pixabay.com/photo/2020/05/11/11/12/cat-5157628_960_720.png",
        price: 13,
        user_id: "e02624ca-837d-4708-9276-74d4158f632a",
      },
      {
        design_name: "Sleeping Sushi",
        description: "Sleeping Sushi",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/threadless/products/1768345/shirt-1603394096-13444345a374c0e12dd1d183f5e94ca6.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 13,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Hugging Sushi",
        description: "Hugging Sushi",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/andremuller/products/317104/original-1606258048-94fe46c771047d336fa83e17a9bd7c72.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 13,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Onigiri",
        description:
          "A t-shirt for the great unsung hero of Japanese food - the rice ball, onigiri. A simple, cute design with onigiri written in Japanese hiragana. For anyone who has experienced the joy of a delicious onigiri.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/ichinisan/products/860824/shirt-1544534309-a1266a1fa82419af3a3da61b3e7eb1d9.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 13,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Space Dog",
        description:
          'Explore, not war! Text reads "Woof Woof" in Russian. Celebrate the exploits of the brave Pawsmonauts!',
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/sketchboy01/products/79901/original-1646900893-283a1f4aa42a0af65c22776498b756dc.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZjRlZWUwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 13,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Science!",
        description: null,
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/threadless/products/1766154/shirt-1603296518-cec39b353f06e59d21133565b63d034d.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 12,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Schrodinger's Kitty",
        description: "Adopt a Schrodinger's kitty today.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/threadless/products/1724502/shirt-1601647689-507feb5b81ae96341686ead8ac4979dc.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 11,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Scienkits",
        description: "Scientist as kitties!",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/taylorross1/products/1971547/shirt-1611668293-c9cb86a2abbb5e9648e39c69b4c6070b.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiY2NjY2NjIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 11,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Full Snack Developers",
        description: null,
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/sachpica/products/2689526/shirt-1647547727-70cf51208785c899477b3bbddc97979b.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 12,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Element of Surprise",
        description: "It's an element of surprise!",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/quacken/products/219505/shirt-1493534026-8fccaded87fd712472c87601ef984d5a.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 8,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Limited Interactions",
        description: "For the introverts in your life.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/trufflepig/products/2317741/shirt-1624995948-e3945b35104aff65da23698e4d7520c5.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Skull with Crown",
        description: "Skull with Crown",
        image_url:
          "https://cdn.pixabay.com/photo/2017/11/21/16/35/skull-with-crown-2968613_960_720.png",
        price: 6,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "MESSAGE IN A BOTTLE",
        description:
          "Sure, Why Not? It’s like YOLO, except for the old people with a deathwish.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/twocabezas/products/2594243/shirt-1638741585-c34a9e7e78d1e0524f6e4f27665d2952.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Beach Body",
        description: "Cthulu looking good.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/behemot/products/265859/shirt-1499520892-ac0336af23bd8547e57e8389b57a36db.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Forever Tired",
        description: "Do you get me?",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/personalhell/products/2773717/shirt-1656089870-8d2037bc7c76401b20b146d652a4e850.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 8,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Cry Hard",
        description: null,
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/personalhell/products/2771250/shirt-1655830486-bffbc24ab526cae82c3e1712c82165a6.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 11,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Where's My Will To Live?",
        description: "No where.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/personalhell/products/2771464/shirt-1655846379-81642eb9b94d5ac68cb7003c1519a40c.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Cacti Skull",
        description: "Cacti in Skull",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/lenagraphic/products/2466220/original-1631774008-24a6f87a35075b28afcf6b7b8a142299.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiNzkwMDFkIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Bike happy",
        description: "Don't worry, bike happy.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vektorkita/products/1173235/shirt-1570853770-8b4c22ad420506b465a9b0cc21fada6e.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Astronaut Jumping",
        description: null,
        image_url:
          "https://cdn.pixabay.com/photo/2022/03/10/13/59/astronaut-7059915_960_720.png",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Camping Under The Stars",
        description: "Camping under the stars.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/rocketman/products/1405597/shirt-1588092314-bb552020322da5e80eb99545e59e601c.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMTMxNjQzIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Mountain and Sea",
        description: "Mountain and Sea",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/quilimo/products/2835921/shirt-1662351320-3913f15e06c10c924c528c3e053e76f2.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 9,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Hiding Cat",
        description: "Cat is hiding.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/benjimoji/products/2432291/shirt-1629862812-47b7c52c26942d3207e7761562e93cf2.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "CookieMon",
        description: "Cookie Monster",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/bywaydesign/products/2857155/shirt-1664380879-72909575fbf59a245fdd1696085e58af.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiNzBjOGEwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Gamers Respawn",
        description: "Gamers don't die, they respawn.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/Chaplo/products/2853374/shirt-1664037312-5126a0996c84f92ff307f45b3148bf17.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Wild Flowers",
        description: "Wild flowers.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/littleclyde/products/1733363/shirt-1601972810-032177f626e1320646866a05769e7ad2.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiNDkxMzQ0In1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 14,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Silent Princess",
        description: "Slient princes and triforce.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/lirovi/products/797062/shirt-1539392879-1f268496ca1527c49bec8f2338505e4c.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 13,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Tropical Swirl",
        description: "A swirl of retro style tropical flowers.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/waynem/products/2772724/shirt-1655974542-e9daa07f29774a170f8bf51eaa625eb7.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmNiNWFkIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Elemeno",
        description:
          "Graduation gift or present idea for your kindergarten, nursery, preschool, pre-k, elementary teacher, student, or preschooler in your family or friends who loves alphabets or letters, Elemeno Alphabet - Preschool Kindergarten - School Teacher",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/MadeByBono/products/2482280/original-1633130404-ad31bc5cbf73f4b91d370e8e96e2d018.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "I'm Tired",
        description: "Always tired.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/meandthemoon/products/353606/shirt-1509381403-cf902c942a24e272e5be6083167d0307.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZWVlZWVlIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 13,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Hope",
        description: "I hope you like it",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/makart/products/1528719/shirt-1593349979-6afa29be9ef252561b4905a2b6ce134f.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 10,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Meow Meow Catmas",
        description: "For the cat ladies.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/makart/products/2550432/shirt-1636480710-739237329b9f0321c5d026f69b4a2d99.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAxZTNmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 15,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Denial is Everything",
        description: "Everything is fine.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/matinga/products/478283/shirt-1521857918-e18673e8bc1b34c5a7af4ae487277fb9.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyMDAuMCwgMTM3MS40Mjg1NzE0Mjg1NzEzXSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3ODRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvMDQ5NjdkMDI1NTIyZGNhMjQxNzc4ZDYwN2UxZjAxMjIvZnJvbnQtMTQ5Njc4MjA2MC03Mzk1ZWYxYmRkMmZjNThlYzU0ZTQ1ZTI3N2M3NWFhNy5wbmciXSwgeyJ5IjogNTA2LCAieCI6IDYwNywgImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 15,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Good Vibes",
        description: "Chil",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/JustMyType/products/2630817/shirt-1641965911-a6bb63b2b8a9ecc456ee7fee17ca7097.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiM2EzYTNhIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 18,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "You are Enough",
        description: "Always remember that.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/JustMyType/products/2620659/shirt-1641096810-bed9b840bb888be4158471891f5f0aec.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmNGUwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 18,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Just Meh",
        description: "meh...",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/weirdpeople/products/910935/original-1549362426-b578d261c76738ba3e2166992d5cbdf3.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 15,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "FLO\\T",
        description: "Float",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/angchor/products/608448/shirt-1528768157-59cebdb57b647b554a4cb832409de578.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiYTRjZmQyIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 16,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Indecisive",
        description: "Maybe",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/weirdpeople/products/1800967/shirt-1604923520-6e0ad89d500a9ec47806b2bd8ab5056b.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZTYwYTk2In1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 14,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Escape the Ordinary",
        description:
          "Escape the ordinary...Balloon ride on the wave of your dreams...Have fun! ..I hope you like",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/makart/products/2958875/shirt-1670348534-97e67f510a84e81110a4e3428cb5438d.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAxMjI2In1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 17,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Hello Goodbye",
        description: "Say goodbye.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/goodymoody/products/12684/shirt-1459509961-f1fb0212eb4ad60ddd17c61ab5a78e2a.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZDFlYmU2In1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 19,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Stayer",
        description: "Tough as hell",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/shirtmustgoon/products/959845/original-1553628355-2e287f6fbcc1b9d15dea0f727777c889.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 18,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Climb High",
        description: "aim for the top of that tree",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/cabinsupplyco/products/299179/shirt-1503068170-9766d475669bdf6b54c18763aa342831.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMmQ2OTAzIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 17,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "KEEP GO/NG",
        description: "The going is usually tough, so just keep going.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/dylmor/products/1349525/shirt-1585531296-79947827614fd422220a41d4034782ef.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZjI0NDBlIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 18,
        user_id: "c03ade38-288f-4559-9058-6c8e9fee0773",
      },
      {
        design_name: "Today is a Good Day to Start",
        description: "Right now.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/Matthewtaylorwilson/products/1644049/shirt-1598282718-8d264fc41cda9f3a4e7523cca4c4c668.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiN2NlN2Q3In1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 19,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Neko Ramen",
        description: "Neko in a traditional kimono eating authentic ramen.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vincenttrinidad/products/794065/shirt-1539187952-e4b0bf26d5807a0f18d83f1afac51970.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 20,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Shiba Inu",
        description:
          "Shiba Inu is the native dog of Japan. I wanted to depict it in a traditional Japanese woodblock print Ukiyo-e style. So here it is.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vincenttrinidad/products/1255468/shirt-1577706999-60adad4da73c141ef6352fc1989dcc26.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 20,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Cathulhu",
        description:
          "Inspired by The Great Old One and the famous internet cat.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vincenttrinidad/products/1714097/shirt-1601254855-f7ba43f1de2c5468e282e539dcf2a277.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 18,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "I Don't Care",
        description: "Unicorn.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/thiagocorreamellado/products/1148756/shirt-1568731952-c1acb401adcbf8f151fef8310bef8879.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZjRjY2NjIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 16,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Sloth",
        description:
          "Sloth, no, nope today is a funny and cute art inspired by the animal's lover. Pet art perfect for funny design, lazy person and procrastination.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/coffeeman/products/1170007/shirt-1570634860-74aeb8c78deaa549417c2bee3b64db5f.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMGI0MjZkIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 13,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Roof Roof",
        description: "Dog barking at roof.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/obinsun/products/2905914/shirt-1667597092-29ab7427548f172c27eeaf16ec7a7d90.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 18,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Cat Lucky Gym",
        description: "Lucky cat at gym.",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/coffeeman/products/2665655/shirt-1645034978-2926d89b89d786dd6f97e1d1d6ae094e.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmMmNjIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 18,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Tea-Rex",
        description: "Dinosaur, tea-rex",
        image_url:
          "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/coffeeman/products/498518/shirt-1523148307-b77959c6367c6f5cd6c073ced158cd27.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAyMzQzIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
        price: 25,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Nudibranch",
        description: "Nudibranch",
        image_url:
          "https://images.unsplash.com/photo-1649828538083-9fbf6dd03473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        price: 18,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Grey Shark",
        description: "Close up of grey shark.",
        image_url:
          "https://images.unsplash.com/photo-1564731071754-001b53a902fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 17,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Turtle",
        description: "Close up shot of turtle in water.",
        image_url:
          "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
        price: 17,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Snake",
        description: "Illustration of snake.",
        image_url:
          "https://images.unsplash.com/photo-1633081528930-91c8cc07f3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80",
        price: 15,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Spider",
        description: "Spider on orange background.",
        image_url:
          "https://images.unsplash.com/photo-1596442608316-6f4f5fdc6d2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80",
        price: 15,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Eagle",
        description: "Eagle",
        image_url:
          "https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        price: 15,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
      {
        design_name: "Alpaca",
        description: "Fluffy alpaca.",
        image_url:
          "https://images.unsplash.com/photo-1641288559236-db806a50931b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        price: 15,
        user_id: "4ad97cbf-251e-4986-95f8-50463f36cd32",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_addresses");
    await queryInterface.bulkDelete("designs");
  },
};
