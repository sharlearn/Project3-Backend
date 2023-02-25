require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing DB
const db = require("./db/models/index");

const {
  user,
  design,
  theme,
  order,
  ordered_design,
  user_address,
  colour,
  design_colours,
} = db;

// importing Routers
const UserRouter = require("./routers/userRouter");
const DesignRouter = require("./routers/designRouter");
const OrderRouter = require("./routers/orderRouter");
const ColourRouter = require("./routers/colourRouter");

// importing Controllers
const UserController = require("./controllers/userController");
const DesignController = require("./controllers/designController");
const OrderController = require("./controllers/orderController");
const ColourController = require("./controllers/baseController");

// initializing Controllers
const userController = new UserController(user);
const designController = new DesignController(design, theme, user);
const orderController = new OrderController(
  order,
  user,
  ordered_design,
  user_address,
  design,
  colour,
  design_colours
);
const colourController = new ColourController(colour);

// initializing Routers
const userRouter = new UserRouter(userController, express).routes();
const designRouter = new DesignRouter(designController, express).routes();
const orderRouter = new OrderRouter(orderController, express).routes();
const colourRouter = new ColourRouter(colourController, express).routes();

// Using the routers
app.use("/user", userRouter);
app.use("/design", designRouter);
app.use("/order", orderRouter);
app.use("/colour", colourRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
