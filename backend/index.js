const express = require("express");
const mongoose = require("mongoose");

const artisteRouter = require("./routers/artisteRouter")
const podcastRouter = require("./routers/podcastRouter");
const seriesRouter = require("./routers/seriesRouter");
const userRouter = require("./routers/userRouter");

const app = express();


//middleware
const port=5000;
app.use(express.json());
app.use("/api/artistes", artisteRouter);
app.use("/api/series", seriesRouter);
app.use("/api/podcasts", podcastRouter);
app.use("/api/user", userRouter);



app.listen(port, () =>{
    console.log("Server running on port 5000");
});
