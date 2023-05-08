const express = require("express");
const router = express.Router();

const Category = require('../models/category');

/**
 * GET category list.
 *
 * @return category list | empty.
 */
router.get('/', (req, res, next) => {
  try {
    Category.find({})
      .then((data) => res.json({
        status: 200,
        data: data,
      }))
      .catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET single category.
 *
 * @return category details | empty.
 */
router.get('/:id', (req, res, next) => {
  try {
    Category.findOne({ _id: req.params.id })
      .then((data) => res.json({
        status: 200,
        data: data,
      }))
      .catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * POST new category.
 *
 * @return category details | empty.
 */
router.post('/', (req, res, next) => {
  if (req.body.title) {
    Category.create(req.body)
      .then((data) => res.json({
        status: 200,
        data: data,
      }))
      .catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * POST edit category.
 *
 * @return category details | empty.
 */
router.put('/:id', (req, res, next) => {
  try {
    const update = req.body;
    Category.findOneAndUpdate({ _id: req.params.id }, update, { new: true })
      .then((data) => res.json({
        status: 200,
        data: data,
        message: 'Category updated successfully',
      }))
      .catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * DELETE a category.
 *
 * @return delete result | empty.
 */
router.delete('/:id', (req, res, next) => {
  Category.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json({
      status: 200,
      message: 'Category deleted successfully',
    }))
    .catch(next);
});

module.exports = router;
