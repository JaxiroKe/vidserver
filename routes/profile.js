const express = require("express");
const router = express.Router();

const Profile = require('../models/profile');

/**
 * GET profile list.
 *
 * @return profile list | empty.
 */
router.get('/', (req, res, next) => {
  try {
    Profile.find({}).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET single profile.
 *
 * @return profile details | empty.
 */
router.get('/:id', (req, res, next) => {
  try {
    Profile.findOne({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * POST new profile.
 *
 * @return profile details | empty.
 */
router.post('/', (req, res, next) => {
  if (req.body.title) {
    Profile.create(req.body).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * POST edit profile.
 *
 * @return profile details | empty.
 */
router.post('/:id', (req, res, next) => {
  let myquery = { _id: ObjectId(req.params.id) };
  if (req.body.title) {
    Profile.updateOne(myquery, req.body, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    }).then((data) => res.json(data)).catch(next);
  } else {
    res.json({ error: 'An input field is either empty or invalid', });
  }
});

/**
 * DELETE a profile.
 *
 * @return delete result | empty.
 */
router.delete('/:id', (req, res, next) => {
  Profile.findOneAndDelete({ _id: req.params.id }).then((data) => res.json(data)).catch(next);
});

module.exports = router;
