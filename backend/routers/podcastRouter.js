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

// // Like a podcast
// router.put("/like/:id", (req, res) => {
//   Podcast.findById(req.params.id)
//     .then((podcast) => {
//       if (!podcast) return res.status(404).json({ message: "Podcast not found" });

//       podcast.likes = (podcast.likes || 0) + 1;
//       return podcast.save();
//     })
//     .then((updatedPodcast) => res.status(200).json(updatedPodcast))
//     .catch((err) => {
//       console.error("Error liking podcast:", err);
//       res.status(500).json(err);
//     });
// });

// // Add a comment to a podcast
// router.post("/comment/:id", (req, res) => {
//   const { userId, comment } = req.body;

//   Podcast.findById(req.params.id)
//     .then((podcast) => {
//       if (!podcast) return res.status(404).json({ message: "Podcast not found" });

//       podcast.comments.push({ userId, comment, date: new Date() });
//       return podcast.save();
//     })
//     .then((updatedPodcast) => res.status(200).json(updatedPodcast))
//     .catch((err) => {
//       console.error("Error adding comment:", err);
//       res.status(500).json(err);
//     });
// });


module.exports = router;
