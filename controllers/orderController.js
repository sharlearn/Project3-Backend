class OrderController {
  constructor(
    orderModel,
    userModel,
    orderedDesignModel,
    userAddressModel,
    designModel,
    colourModel,
    designColourModel
  ) {
    this.orderModel = orderModel;
    this.userModel = userModel;
    this.orderedDesignModel = orderedDesignModel;
    this.userAddressModel = userAddressModel;
    this.designModel = designModel;
    this.colourModel = colourModel;
    this.designColourModel = designColourModel;
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
      // const order = await this.orderModel.findByPk(orderId);
      const order = await this.orderedDesignModel.findAll({
        where: {
          order_id: orderId,
        },
        include: [
          {
            model: this.orderModel,
            include: [
              {
                model: this.userAddressModel,
              },
            ],
          },
          {
            model: this.designColourModel,
            include: [
              {
                model: this.designModel,
              },
              {
                model: this.colourModel,
              },
            ],
          },
        ],
      });
      return res.json(order);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //Add one order
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
        status: "pending",
      });
      for (const design of chosenDesigns) {
        const addedDesign = await this.designModel.findByPk(design.designId);

        const addedColour = await this.colourModel.findByPk(design.colourId);

        await addedDesign.setColours(addedColour);

        const designColourId = await this.designColourModel.findOne({
          where: {
            design_id: design.designId,
            colour_id: design.colourId,
          },
        });

        await this.orderedDesignModel.create({
          order_id: order.dataValues.id,
          quantity: design.quantity,
          size: design.size,
          design_colours_id: designColourId.dataValues.id,
        });
      }
      return res.json(order);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = OrderController;
