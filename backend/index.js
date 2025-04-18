const express = require("express");
const mongoose = require("mongoose");
const cors= require('cors');


const artisteRouter = require("./routers/artisteRouter")
const podcastRouter = require("./routers/podcastRouter");
const seriesRouter = require("./routers/seriesRouter");
const userRouter = require("./routers/userRouter");
const contactRouter = require("./routers/contactRouter")

const app = express();


//middleware
const port=5000;
app.use(cors({origin: ['http://localhost:3000']}));
app.use(express.json());

app.use("/artist", artisteRouter);
app.use("/series", seriesRouter);
app.use("/podcast", podcastRouter);
app.use("/user", userRouter);
app.use("/contact", contactRouter);



app.listen(port, () =>{
    console.log("Server running on port 5000");
});
