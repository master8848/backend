const express = require('express');
const router = new express.Router();

const MensRanking = require('../models/mens');

router.patch('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(_id);
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/mens', async (req, res) => {
  try {
    const adding = new MensRanking(req.body);
    console.log(req.body);
    const insert = await adding.save();
    res.status(201).send(insert);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});
router.get('/mens', async (req, res) => {
  try {
    const getMens = await MensRanking.find().sort({ ranking: 1 });
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});
// individual data by id
router.get('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

module.exports = router;
