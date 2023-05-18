const express = require("express");
const router = express.Router();

const UserWallet = require('../models/user_wallet');

/**
 * GET user wallet list.
 *
 * @return user wallet list | empty.
 */
router.get('/', (req, res, next) => {
  try {
    UserWallet.find({}).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET single user wallet.
 *
 * @return user wallet details | empty.
 */
router.get('/:id', (req, res, next) => {
  try {
    UserWallet.findOne({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * POST new user wallet.
 *
 * @return user wallet details | empty.
 */
router.post('/', (req, res, next) => {
  if (req.body.title) {
    UserWallet.create(req.body).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * POST edit user wallet.
 *
 * @return user wallet details | empty.
 */
router.post('/:id', (req, res, next) => {
  let myquery = { _id: ObjectId(req.params.id) };
  if (req.body.title) {
    UserWallet.updateOne(myquery, req.body, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    }).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * DELETE a user wallet.
 *
 * @return delete result | empty.
 */
router.delete('/:id', (req, res, next) => {
  UserWallet.findOneAndDelete({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
});

module.exports = router;
