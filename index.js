const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./.env" });

const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin'
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const home = require("./routes/app");
const apihome = require("./routes/app");

const category = require("./routes/category");
const product = require("./routes/product");
const profile = require("./routes/profile");
const user = require("./routes/user");
const wallet = require("./routes/wallet");

app.use(express.json({ extended: false }));

app.use("/", home);
app.use("/api", apihome);

app.use("/api/category", category);
app.use("/api/product", product);
app.use("/api/profile", profile);
app.use("/api/user", user);
app.use("/api/wallet", wallet);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Vidserver is running in port ${PORT}`));
