const express = require("express");
const router = express.Router();

class DesignRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    router.get("/", this.controller.getAllDesigns.bind(this.controller));
    router.get("/:designId", this.controller.getOne.bind(this.controller));
    router.get(
      "/theme/:themeId",
      this.controller.getDesignofTheme.bind(this.controller)
    );
    router.get(
      "/search/:search",
      this.controller.searchDesigns.bind(this.controller)
    );
    router.post("/", this.controller.addOne.bind(this.controller));
    return router;
  };
}

module.exports = DesignRouter;
