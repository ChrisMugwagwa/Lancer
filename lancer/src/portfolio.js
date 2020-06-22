const mongoose = require('mongoose')
const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const multer = require('multer');
const User = require('user');

mongoose.connect('mongodb://localhost:3000');



const portfolioSchema = new Schema({
  portfolio: {
    tile: {
        type: String,
        required: [true, 'tile missing.']
        
      },

      bio: {
        type: String,
        required: [true, 'bio missing.']
        
      },
    
      tile: {
        type: String,
        required: [true, 'tile missing.']
        
      },
    
      image: {
        type: String,
        required: [true, 'an image is needed']
        
      },
    
  }

})

const User = mongoose.model('portfolio', portfolioSchema)

module.exports = Portfolio
