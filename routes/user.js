const express = require("express");
const router = express.Router();

const User = require('../models/user');

/**
 * GET user list.
 *
 * @return user list | empty.
 */
router.get('/', (req, res, next) => {
  try {
    User.find({}).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET single user.
 *
 * @return user details | empty.
 */
router.get('/:id', (req, res, next) => {
  try {
    User.findOne({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * POST new user.
 *
 * @return user details | empty.
 */
router.post('/', (req, res, next) => {
  if (req.body.username) {
    User.create(req.body).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * POST edit user.
 *
 * @return user details | empty.
 */
router.put('/:id', (req, res, next) => {
  try {
    const update = req.body;
    User.findOneAndUpdate({ _id: req.params.id }, update, { new: true })
      .then((data) => res.json({
        status: 200,
        data: data,
        message: 'User updated successfully',
      }))
      .catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * DELETE a user.
 *
 * @return delete result | empty.
 */
router.delete('/:id', (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json({
      status: 200,
      message: 'User deleted successfully',
    }))
    .catch(next);
});

module.exports = router;
