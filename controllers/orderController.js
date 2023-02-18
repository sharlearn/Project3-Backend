class OrderController {
  // constructor(orderModel, userModel, ordered_designModel) {
  constructor(orderModel, userModel) {
    this.orderModel = orderModel;
    this.userModel = userModel;
    // this.ordered_designModel = ordered_designModel;
  }

  // //Retrieve all orders
  // async getAllOrders(req, res) {
  //   try {
  //     const output = await this.orderModel.findAll({
  //       include: [
  //         {
  //           model: this.userModel,
  //           model: this.ordered_designModel,
  //         },
  //       ],
  //     });
  //     return res.json(output);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  // // Retrieve specific order
  // async getOneOrder(req, res) {
  //   const { orderId } = req.params;
  //   try {
  //     const order = await this.orderModel.findByPk(orderId);
  //     return res.json(order);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  // Add new order
  async addOneOrder(req, res) {
    // this is the same as const buyerId = req.body.buyerId;
    const {
      userId,
      // buyerId,
      totalPrice,
      deliveryAddress,
      // paymentMethod,
      orderInfo,
      // where orderInfo is an array of objects
      // in the form
      // [ {colourId: 1, designId: 2, quantity: 3},
      //   {colourId: 2, designId: 1, quantity: 2}
      // ]
      status,
    } = req.body;
    console.log(req.body);
    try {
      const newOrder = await this.orderModel.create({
        user_id: userId,
        total_price: totalPrice,
        delivery_address: deliveryAddress,
        // commented out payment_method as this is not part of our model
        // payment_method: paymentMethod,
        // default status to pending
        status: "pending",
        // created_at: new Date(),
        // updated_at: new Date(),
        // id: 999,
      });

      // for each order_id, create a row in the OrderedDesigns table
      // for length of orderInfo array,
      while (i < orderInfo.length) {
        const newOrderedDesign = await this.ordered_designModel.create({
          order_id: newOrder.id,
          design_id: Number(orderInfo[i].designId),
          colour_id: Number(orderInfo[i].colourId),
          quantity: Number(orderInfo[i].quantity),
        });
        i++;
      }

      let data = await this.orderModel.findAll();

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = OrderController;
