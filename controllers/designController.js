const { Op } = require("sequelize");
const BaseController = require("./baseController")

class DesignController extends BaseController {
  constructor(designModel, themeModel, userModel) {
    this.designModel = designModel;
    this.themeModel = themeModel;
    this.userModel = userModel;
  }

  //Retrieve all designs
  async getAllDesigns(req, res) {
    // I think we could use the baseController getAll here. For includes, we can change up our code a bit. See baseController
    try {
      const output = await this.designModel.findAll({
        include: [
          {
            model: this.userModel,
          },
          {
            model: this.themeModel,
            through: { attributes: [] },
          },
        ],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Ideally we also use one single function we reuse to getOne, regardless of model
  // what do we need? the id, and the includes like for getAll

  /* 

  This would be a generic getOne function you could use in baseController and then reuse accordingly
  async getOne(req, res) {
    { id } = req.params
    { include: model } = req.query

    try {
      const record = await this.model.findByPk(id, {
        include: model
      })

      return res.json(record)
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  
  */
  // Retrieve one design based on PK
  async getOne(req, res) {
    const { designId } = req.params;
    // What if designId is not an id, a word or invalid, or even empty??? Let's try to handle these errors
    try {
      const design = await this.designModel.findByPk(designId, {
        include: [{ model: this.userModel }],
      });
      return res.json(design);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Search for and retrieve design
  // we don't search here. We are getting all designs, just with some conditions. This should work regardless of if we have a search param or not. Just like with the getAll in baseController, we could account in baseController for the search param possibly. Giving the ability to specify multiple where clauses from the FE side.
  async getAll(req, res) {
    const { search } = req.params;
    console.log(search);

    try {
      const results = await this.designModel.findAll({
        where: {
          design_name: { [Op.iLike]: `${search}%` },
        },
        include: [{ model: this.userModel }],
      });
      return res.json(results);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve designs based on theme
  async getDesignofTheme(req, res) {
    // What is themeID is invalid?
    const { themeId } = req.params;
    try {
          // Since this is the designController, we should not query the themeModel here imo.
      const designs = await this.themeModel.findByPk(themeId, {
        include: [
          {
            model: this.designModel,
            through: { attributes: [] },
            include: {
              model: this.userModel,
            },
          },
        ],
      });

      return res.json(designs.designs);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve designs based on user_id
  async getDesignofUser(req, res) {
    const { userId } = req.params;
    // What is the userId is invalid? Does the user even exist?
    try {
      const designs = await this.designModel.findAll({
        where: {
          user_id: userId,
        },
        include: {
          model: this.userModel,
        },
      });

      return res.json(designs);
    } catch (err) {
      console.log(err);
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
