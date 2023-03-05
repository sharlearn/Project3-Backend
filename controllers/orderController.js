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
  // same as for designController
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
  // Since this is quite the complex create, not using BaseController is fine here
  async addOneOrder(req, res) {
    const { userId, totalPrice, deliveryAddress, chosenDesigns } = req.body;

    // I think we should definitely check if all these values are defined, and if not return some kind of error. We call this validation

    //simple one:
    if (!userId || !totalPrice || !deliveryAddress || !chosenDesigns) return res.status(400).json("Invalid Request Body")

    // As we do n creates and k finds here, we should wrap all this into a transaction. What if the first create works, but on second create there is an error. The code would go into the catch error, but the first create would remain. With a transaction it would rollback that first create as well.
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
        // By right this validation should happen before we find and create here
        const { designId, colourId, quantity, size } = design;
        if (!designId || !colourId || !quantity || !size) return res.status(400).json("Invalid Request Body")

        const addedDesign = await this.designModel.findByPk(designId);

        const addedColour = await this.colourModel.findByPk(colourId);

        await addedDesign.setColours(addedColour);

        const designColourId = await this.designColourModel.findOne({
          where: {
            design_id: designId,
            colour_id: colourId,
          },
        });

        await this.orderedDesignModel.create({
          order_id: order.dataValues.id,
          quantity: quantity,
          size: size,
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
