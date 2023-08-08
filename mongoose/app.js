const mongoose = require('mongoose');
const express = require('express');
// connect to a MongoDB database
mongoose.connect('mongodb://localhost:27017/mongocli')
.then(() => console.log("Database connected"))
.catch(err => console.error(err));