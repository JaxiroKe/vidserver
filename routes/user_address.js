const express = require("express");
const router = express.Router();

const UserAddress = require('../models/user_address');

/**
 * GET user address list.
 *
 * @return user address list | empty.
 */
router.get('/', (req, res, next) => {
  try {
    UserAddress.find({}).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET single user address.
 *
 * @return user address details | empty.
 */
router.get('/:id', (req, res, next) => {
  try {
    UserAddress.findOne({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * POST new user address.
 *
 * @return user address details | empty.
 */
router.post('/', (req, res, next) => {
  if (req.body.title) {
    UserAddress.create(req.body).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * POST edit user address.
 *
 * @return user address details | empty.
 */
router.post('/:id', (req, res, next) => {
  let myquery = { _id: ObjectId(req.params.id) };
  if (req.body.title) {
    UserAddress.updateOne(myquery, req.body, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    }).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * DELETE a user address.
 *
 * @return delete result | empty.
 */
router.delete('/:id', (req, res, next) => {
  UserAddress.findOneAndDelete({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
});

module.exports = router;
