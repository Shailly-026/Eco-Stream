const express = require("express");
const contact = require("../models/contactModel");

const contact = express.Router();
// create a new contact
Router.post("/add", (req, res) => {
  console.log(req.body);

  new Router(req.body).save()   // to save in database usingg mongoose
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})
module.exports = router;
