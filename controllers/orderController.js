class OrderController {
  constructor(orderModel, userModel, orderedDesignModel, userAddressModel) {
    this.orderModel = orderModel;
    this.userModel = userModel;
    this.orderedDesignModel = orderedDesignModel;
    this.userAddressModel = userAddressModel;
  }

  // //Retrieve all orders
  async getAllOrders(req, res) {
    try {
      const output = await this.orderModel.findAll({
        include: [{ model: this.userAddressModel }],
      });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific order
  async getOneOrder(req, res) {
    const { orderId } = req.params;

    try {
      const order = await this.orderModel.findByPk(orderId);
      return res.json(order);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //Add one order, function to add to order_designs still required
  async addOneOrder(req, res) {
    const { userId, totalPrice, deliveryAddress, chosenDesigns } = req.body;

    try {
      const [userAddress, created] = await this.userAddressModel.findOrCreate({
        where: { address: deliveryAddress, user_id: userId },
        defaults: {
          type: "mailing",
        },
      });

      const order = await this.orderModel.create({
        total_price: totalPrice,
        delivery_address: userAddress.id,
        user_id: userId,
        status: "test",
      });
<<<<<<< Updated upstream
=======

      // this updates ordered_design table with design_id = 1, colour_id = 2, quantity = 3
      // await order.setDesigns(1, {
      //   through: { colourId: 2, quantity: 3 },
      // });

      // for (const design of chosenDesigns) {
      //   await order.setDesigns(design.design_id, {
      //     through: {
      //       colour_id: `${design.colourId}`,
      //       quantity: `${design.quantity}`,
      //     },
      //   });
      // }

      for (const design of chosenDesigns) {
        console.log(this.colourModel);
        console.log(this.designModel);
        const addedDesign = await this.designModel.findAll({
          where: { id: design.design_id },
        });
        console.log(addedDesign);

        const addedColour = await this.colourModel.findAll({
          where: {
            id: design.colour_id,
          },
        });
        console.log(addedColour);

        await order
          .setColours(addedColour, {
            through: { quantity: `${design.quantity}` },
          })
          .setDesigns(addedDesign);
      }

>>>>>>> Stashed changes
      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = OrderController;
