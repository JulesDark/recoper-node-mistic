const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoute = require('../backend/routes/user.route');
const db = require('../backend/database/db').mongoURI;

//connect to database from mongoAtlas
mongoose.
    connect(db,{useNewUrlParser:true})
    .then(()=> console.log('mongoose succesfully connected'))
    .catch((err) => console.log(err));
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use('/user',userRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port,()=>{
    console.log('connected to port ' + port);
});
app.use(function(err,req,res,next){
    console.log(err.message);
    if (!err.statusCode) err.statusCode=500
    res.status(err.statusCode).send(err.message);
});
