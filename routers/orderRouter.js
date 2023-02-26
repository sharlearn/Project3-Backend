const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller, express, checkJwt) {
    this.controller = controller;
    this.express = express;
    this.checkJwt = checkJwt;
  }

  routes = () => {
    let router = this.express.Router();
    // retrieve all orders for the user who is logged in
    router.get("/", this.controller.getAllOrders.bind(this.controller));
    // router.get("/:userId", this.controller.getAllOrders.bind(this.controller));
    // // retrieve a specific order - should only be accessible to that particular user
    // // return an error if the user making the request does not own the order
    router.get(
      "/:orderId",
      this.checkJwt,
      this.controller.getOneOrder.bind(this.controller)
    );
    router.post(
      "/",
      this.checkJwt,
      this.controller.addOneOrder.bind(this.controller)
    );
    return router;
  };
}

module.exports = OrderRouter;
