const express = require("express");
const app = express();
const product = require("./routes/product");

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  