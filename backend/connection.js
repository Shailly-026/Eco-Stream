const mongoose = require('mongoose');

const url = "mongodb+srv://shaillysaraswat22:shailly26@cluster0.gfs9f.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
    
});

module.exports= mongoose;