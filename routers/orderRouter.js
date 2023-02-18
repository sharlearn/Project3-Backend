const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    // retrieve all orders for the user who is logged in
    // router.get("/:userId", this.controller.getAllOrders.bind(this.controller));
    // // retrieve a specific order - should only be accessible to that particular user
    // // return an error if the user making the request does not own the order
    // router.get("/:orderId", this.controller.getOneOrder.bind(this.controller));
    router.post("/", this.controller.addOneOrder.bind(this.controller));
    return router;
  };
}

module.exports = OrderRouter;
