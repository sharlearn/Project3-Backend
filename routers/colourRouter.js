const express = require("express");
const router = express.Router();

class ColourRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    router.get("/", this.controller.getAll.bind(this.controller));
    return router;
  };
}

module.exports = ColourRouter;
