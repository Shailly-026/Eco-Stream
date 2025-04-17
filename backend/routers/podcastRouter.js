const express = require("express");
const Podcast = require("../models/podcastModel");
const verifyToken = require("../middleware/verifyToken");

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


router.post('/like/:id', verifyToken, (req, res) => {
  const { id } = req.params;


  Podcast.findById(id)
    .then((podcast) => {
      if (!podcast) {
        return res.status(404).json({ message: 'Podcast not found' });
      }
      console.log(podcast.likedBy, req.user._id);
      
      const hasLiked = podcast.likedBy.includes(req.user._id);

      if (hasLiked) {
        // Unlike the podcast
        podcast.likedBy = podcast.likedBy.filter((uid) => uid !== req.user._id);
        podcast.likes -= 1;
      } else {
        // Like the podcast
        podcast.likedBy.push(req.user._id);
        podcast.likes += 1;
      }

      return podcast.save().then((updatedPodcast) => {
        res.status(200).json({
          message: hasLiked ? 'Podcast unliked successfully' : 'Podcast liked successfully',
          likes: updatedPodcast.likes,
          likedBy: updatedPodcast.likedBy,
        });
      });
    })
    .catch((error) => {
      console.error('Error liking/unliking podcast:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});


router.post("/comment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;

    if (!comment) {
      return res.status(400).json({ message: "Comment cannot be empty" });
    }

    // Find the podcast by ID and add the comment
    const podcast = await Podcast.findById(id);

    if (!podcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }

    podcast.comments.push({ comment, timestamp: new Date() });
    await podcast.save();

    res.status(200).json({
      message: "Comment added successfully",
      comments: podcast.comments,
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
