const express = require("express");
const router = express.Router();

class UserRouter {
  constructor(userController, express) {
    this.controller = userController;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    // user data should definitely be authenticated! Anyone could just make requests to your BE and retrieve email addresses by spamming random user ids
    router.get("/", this.controller.getAllUsers.bind(this.controller));
    router.get("/:userId", this.controller.getOne.bind(this.controller));
    router.post("/", this.controller.addOne.bind(this.controller));
    // router.post("/:userId/address", )
    // can include a router to create an addressß
    router.post(
      "/finduser",
      this.controller.findorCreateUser.bind(this.controller)
    );
    return router;
  };
}

module.exports = UserRouter;
