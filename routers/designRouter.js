const express = require("express");
const router = express.Router();

class DesignRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:designId", this.controller.getOne.bind(this.controller));
    router.post("/", this.controller.addOne.bind(this.controller));
    return router;
  };
}

module.exports = DesignRouter;
