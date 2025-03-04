const express = require("express");
const Series = require("../models/seriesModel");

const router = express.Router();

// Create a new series
router.post("/add", (req, res) => {
  console.log(req.body);

  new Series(req.body).save()      //to save data in database using mongoose
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all series
router.get('/getall', (req, res) => {

  Series.find() // populate()-method ensures that related podcasts, series, and followers are included in API responses.
  .then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Get a single series by ID
router.get('/getbyid/:id', (req, res) => {

  Series.findById(req.params.id)
    .then((result) => {
      if (!Series) return res.status(404).json({ message: "Series not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
  

// Update a series
router.put('/updateid/:id', (req, res) => {
  Series.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      if(!Series) return res.status(404).json({ message: "Series not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });
});


// Delete a series
router.delete('/delete/:id', (req, res) => {
  Series.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!Series) return res.status(404).json({ message: "Series not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });
});


module.exports = router;
