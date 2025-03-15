const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();
const jwt= require('jsonwebtoken');
require('dotenv').config();


router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

//getall
router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//getbyid
router.get('/getbyid/:id', (req, res) => {
    res.send('response from user getbyid');
});

//update
router.put('/updateid/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);

    });
});

//delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });
});

router.post('/authemticate',(req,res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            //generate token

            const{_id,name, email} = result;
            const payload = (_id, name, email);

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiresIn:'1d'},
                (err, token) => {
                    if(err){
                        console.log(err);
                        res.status(500).json({err});
                    }
                    else{
                        res.status(200).json({token});
                    }
                }
            )
        }
        else{
            res.status(401).json({message:'Invalid credentials'});
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;