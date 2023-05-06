const express = require("express");
const router = express.Router();

const Category = require('../models/category');

/**
 * GET category list.
 *
 * @return category list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
