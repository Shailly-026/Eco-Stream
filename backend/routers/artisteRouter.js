const express = require("express");
const Artiste = require("../models/artisteModel");

const router = express.Router();

require("dotenv").config();
const jwt = require("jsonwebtoken");

// Create a new artiste
router.post("/add", (req, res) => {
  console.log(req.body);

  new Artiste(req.body).save()      //to save data in database using mongoose
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//getall artistes
router.get('/getall', (req, res) => {

  Artiste.find().populate("podcasts series followers")  // populate()-method ensures that related podcasts, series, and followers are included in API responses.
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get artiste by id
router.get('/getbyid/:id', (req, res) => {
  Artiste.findById(req.params.id)
    .then((result) => {
      if (!Artiste) return res.status(404).json({ message: "Artiste not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update
router.put('/updateid/:id', (req, res) => {
  Artiste.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      if (!Artiste) return res.status(404).json({ message: "Artiste not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });
});

//delete
router.delete('/delete/:id', (req, res) => {
  Artiste.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!Artiste) return res.status(404).json({ message: "Artiste not found" });
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });
});

router.post('/authenticate', (req, res) => {
  Artiste.findOne(req.body)
    .then((result) => {
      if (result) {
        //generate token

        const { _id, name, email } = result;
        const payload = { _id, name, email };

        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: '1d' },
          (err, token) => {
            if (err) {
              console.log(err);
              res.status(500).json({ err });
            }
            else {
              res.status(200).json({ token });
            }
          }
        )
      }
      else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})
module.exports = router;