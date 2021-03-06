import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import User from "./models/user";
import Bouquet from "./models/bouquet";
import Order from "./models/order";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalProject";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:

const port = process.env.PORT || 8082;
const app = express();
const listEndpoints = require("express-list-endpoints");

// Add middlewares to enable cors and json body parsing

app.use(cors());
app.use(bodyParser.json());


const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      accessToken: req.header("Authorization"),
    });
    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(401)
        .json({ loggedOut: true, message: "Please try to login again" });
    }
  } catch (err) {
    res
      .status(403)
      .json({ message: "Accesstoken is missing/wrong", error: err });
  }
};

// Start defining your routes here
app.get("/", (req, res) => {
  res.send(listEndpoints(app));
});

// Add bouquets to webshop //
app.post("/bouquets", async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;
    const bouquet = new Bouquet({ name, price, description, imageUrl });
    const saved = await bouquet.save();
    res.status(201).json({ id: bouquet._id });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create bouquet", errors: err.errors });
  }
});

// Show all bouquets in database
app.get("/bouquets", async (req, res) => {
  const bouquets = await Bouquet.find().sort({ price: 1 }).exec();
  res.json(bouquets);
});

// Show single bouquets in database
app.get("/bouquets/:id", async (req, res) => {
  const bouquets = await Bouquet.findOne().exec();
  res.json(bouquets);
});

//Sign up
app.post("/users", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      address,
      zipCode,
      city,
      phoneNumber,
    } = req.body;
    const user = new User({
      firstName,
      lastName,
      email,
      address,
      zipCode,
      city,
      phoneNumber,
      password: bcrypt.hashSync(password),
    });
    const saved = await user.save();
    delete saved.password;
    res.status(201).json({
      id: user._id,
      accessToken: user.accessToken,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber,
      city: user.city,
      zipCode: user.zipCode,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create user", errors: err.errors });
  }
});

app.get("/users/:userId", authenticateUser);
app.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ _id: userId }).populate({
      path: "orderHistory",
      select: "items createdAt status",
      populate: {
        path: "items",
        select: "name price",
      },
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({
      message: "Invalid request.",
      errors: err.errors,
    });
  }
});

// Delete user
app.delete("/users/:userId", authenticateUser);
app.delete("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    await User.findByIdandRemove(userId).then((user) => {
      if (!user) {
        res.status(404).json({ message: `Could not delete user ${userId}.` });
      }
      res.status(204).json({ message: `User ${userId} deleted.` });
    });
  } catch (err) {
    res.status(400).json({
      message: "Invalid request.",
      errors: err.errors,
    });
  }
});

//Log in
app.post("/sessions", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({
        id: user._id,
        accessToken: user.accessToken,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        city: user.city,
        zipCode: user.zipCode,
      });
    } else {
      res.status(404).json({ notFound: true });
    }
  } catch (err) {
    res.status(404).json({ notFound: true });
  }
});

// Post order
app.post("/orders", authenticateUser);
app.post("/orders", async (req, res) => {
  const {
    items,
    userId,
    firstName,
    lastName,
    email,
    address,
    zipCode,
    city,
    phoneNumber,
  } = req.body;

  try {
    const order = await new Order({
      items: items,
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      zipCode: zipCode,
      city: city,
      phoneNumber: phoneNumber,
    }).save();

    await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: { orderHistory: order._id },
      }
    );
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({
      message: "Could not place order.",
      errors: err.errors,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
