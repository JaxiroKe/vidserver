const express = require("express");
const router = express.Router();

const Wallet = require('../models/wallet');

/**
 * GET wallet list.
 *
 * @return wallet list | empty.
 */
router.get('/', (req, res, next) => {
  try {
    Wallet.find({}).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET single wallet.
 *
 * @return wallet details | empty.
 */
router.get('/:id', (req, res, next) => {
  try {
    Wallet.findOne({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * POST new wallet.
 *
 * @return wallet details | empty.
 */
router.post('/', (req, res, next) => {
  if (req.body.title) {
    Wallet.create(req.body).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * POST edit wallet.
 *
 * @return wallet details | empty.
 */
router.post('/:id', (req, res, next) => {
  let myquery = { _id: ObjectId(req.params.id) };
  if (req.body.title) {
    Wallet.updateOne(myquery, req.body, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    }).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * DELETE a wallet.
 *
 * @return delete result | empty.
 */
router.delete('/:id', (req, res, next) => {
  Wallet.findOneAndDelete({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
});

module.exports = router;
