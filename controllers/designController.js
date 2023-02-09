const BaseController = require("./baseController");

class DesignController extends BaseController {
  constructor(designModel, themeModel) {
    super(designModel);
    this.designModel = designModel;
    this.themeModel = themeModel;
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
      const newDesign = await this.model.create({
        design_name: designName,
        image_url: imageUrl,
        description: description,
        user_id: userId,
        price: price,
      });

      await newDesign.setThemes(selectedThemeIds);

      let data = await this.designModel.findAll();
      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = DesignController;
