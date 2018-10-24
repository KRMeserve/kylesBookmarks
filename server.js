const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

const bookmarkController = require('./controllers/bookmarks.js');
app.use('/bookmarks', bookmarkController);

app.listen(PORT || 3000, ()=>{
    console.log('listening...');
});

mongoose.connect(MONGODB_URI, {useNewUrlParser:true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});
