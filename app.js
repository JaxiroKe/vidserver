const express = require("express");
const app = express();

const product = require("./routes/product");

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 300;

app.listen(PORT, () => {
    console.log(`Vidshop server listening on port ${PORT}`)
  })
  