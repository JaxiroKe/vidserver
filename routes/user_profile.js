const express = require("express");
const router = express.Router();

const UserProfile = require('../models/user_profile');

/**
 * GET user profile list.
 *
 * @return user profile list | empty.
 */
router.get('/', (req, res, next) => {
  try {
    UserProfile.find({}).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET single user profile.
 *
 * @return user profile details | empty.
 */
router.get('/:id', (req, res, next) => {
  try {
    UserProfile.findOne({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * POST new user profile.
 *
 * @return user profile details | empty.
 */
router.post('/', (req, res, next) => {
  if (req.body.title) {
    UserProfile.create(req.body).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * POST edit user profile.
 *
 * @return user profile details | empty.
 */
router.post('/:id', (req, res, next) => {
  let myquery = { _id: ObjectId(req.params.id) };
  if (req.body.title) {
    UserProfile.updateOne(myquery, req.body, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    }).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * DELETE a user profile.
 *
 * @return delete result | empty.
 */
router.delete('/:id', (req, res, next) => {
  UserProfile.findOneAndDelete({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
});

module.exports = router;
