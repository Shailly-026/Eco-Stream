const express = require("express");
const Podcast = require("../models/podcastModel");

const router = express.Router();

// Create a new podcast
router.post("/add", (req, res) => {
  console.log(req.body);

  new Podcast(req.body).save()      //to save data in database using mongoose
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all podcasts
router.get('/getallpodcast', (req, res) => {

  Podcast.find()  
  .then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Get a single podcast by ID
router.get('/getbyid/:id', (req, res) => {

  Podcast.findById(req.params.id)
    .then((result) => {
      if (!Podcast) return res.status(404).json({ message: "Podcast not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
  

// Update a podcast
router.put('/updateid/:id', (req, res) => {
  Podcast.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      if (!Podcast) return res.status(404).json({ message: "Podcast not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });
});

// Delete a podcast
router.delete('/delete/:id', (req, res) => {
  Podcast.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!Podcast) return res.status(404).json({ message: "Podcast not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });
});


module.exports = router;
