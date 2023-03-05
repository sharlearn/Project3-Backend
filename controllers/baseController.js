class BaseController {
  constructor(model) {
    this.model = model;
  }

  async getAll(req, res) {
    // we can use an array of model strings to get includes dynamically
    const includedModels = req.query.includes.map((model) => {
      return { model }
    })

    try {
      const output = await this.model.findAll({ include: includedModels });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = BaseController;
