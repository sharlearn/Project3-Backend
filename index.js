require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing DB
const db = require("./db/models/index");

const { user, design, theme } = db;

// importing Routers
const UserRouter = require("./routers/userRouter");
const DesignRouter = require("./routers/designRouter");

// importing Controllers
const UserController = require("./controllers/userController");
const DesignController = require("./controllers/designController");

// initializing Controllers
const userController = new UserController(user);
const designController = new DesignController(design, theme, user);

// initializing Routers
const userRouter = new UserRouter(userController, express).routes();
const designRouter = new DesignRouter(designController, express).routes();

const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUERBASEURL,
  tokenSigningAlg: process.env.AUTH0_TOKENSIGNINGALG,
});

// Using the routers
app.use("/user", userRouter);
app.use("/design", designRouter);

// enforce on all endpoints
app.use(jwtCheck);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
