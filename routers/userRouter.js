const express = require("express");
const router = express.Router();

class UserRouter {
  constructor(userController, express) {
    this.controller = userController;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:userId", this.controller.getOne.bind(this.controller));
    router.post("/", this.controller.addOne.bind(this.controller));
    return router;
  };
}

module.exports = UserRouter;
