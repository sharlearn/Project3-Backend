const express = require("express");
const router = express.Router();

class DesignRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    // Are there any routes here, where we would want the user to be authenticated?
    router.get("/", this.controller.getAllDesigns.bind(this.controller));
    router.get("/:designId", this.controller.getOne.bind(this.controller));
    // This route warrants a themeController
    router.get(
      "/theme/:themeId",
      this.controller.getDesignofTheme.bind(this.controller)
    );
    // this route should be in the userRouter
    router.get(
      "/artist/:userId",
      this.controller.getDesignofUser.bind(this.controller)
    );
    // I don't think we should have a separate route for the search possibly. Ideally we use getAll for that.
    router.get(
      "/search/:search",
      this.controller.searchDesigns.bind(this.controller)
    );
    router.post("/", this.controller.addOne.bind(this.controller));
    return router;
  };
}

module.exports = DesignRouter;
