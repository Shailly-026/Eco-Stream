const express = require("express");
const router = express.Router();

const Model = require("../models/contactModel");
// create a new contact
router.post("/add", (req, res) => {
    console.log(req.body);

    new Model(req.body).save()   // to save in database usingg mongoose
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})
module.exports = router;
