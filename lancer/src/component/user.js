const mongoose = require('mongoose')
const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const multer = require('multer');

mongoose.connect('mongodb://localhost:3000');



const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username missing.'],
    unique: [true, 'Username must be unique 👿']
  },
  name: {
    type: String,
    required: [true, 'name is missing.'],
  },
  password: {
    type: String,
    required: [true, 'Password missing.']
  },
  occupation: {
    type: String,
    required: [true, 'Occupation missing.']
    
  },
  email: {
    type: String,
    required: [true, 'Occupation missing.']
    
  },
  portfolio: {
    type: String,
    value: [
        this.username,
        this.occupation
        

    ]
    
  }

})

const User = mongoose.model('user', userSchema)

module.exports = User
