class DesignController {
  constructor(designModel, themeModel, userModel) {
    this.designModel = designModel;
    this.themeModel = themeModel;
    this.userModel = userModel;
  }

  //Retrieve all designs
  async getAllDesigns(req, res) {
    try {
      const output = await this.designModel.findAll({
        include: [
          {
            model: this.userModel,
          },
          {
            model: this.themeModel,
            attributes: ["theme"],
          },
        ],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific design
  async getOne(req, res) {
    const { designId } = req.params;
    try {
      const design = await this.designModel.findByPk(designId);
      return res.json(design);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Add new design
  async addOne(req, res) {
    const {
      designName,
      imageUrl,
      description,
      userId,
      price,
      selectedThemeIds,
    } = req.body;
    try {
      const selectedThemes = await this.themeModel.findAll({
        where: { id: selectedThemeIds },
      });

      const newDesign = await this.designModel.create({
        design_name: designName,
        image_url: imageUrl,
        description: description,
        user_id: userId,
        price: price,
      });

      await newDesign.setThemes(selectedThemes);

      let data = await this.designModel.findAll();

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = DesignController;
