require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./db/models/index");
const { design, theme } = db;

const DesignController = require("./controllers/designController");
const DesignRouter = require("./routers/designRouter");

const designController = new DesignController(design, theme);
const designRouter = new DesignRouter(designController, express).routes();

app.use("/design", designRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
