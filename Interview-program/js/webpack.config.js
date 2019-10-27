const path = require('path'); // this comes with node lib
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'asset'), // absulote bath eg lesson-160\modern-javascript-lesson-160\chapter_19\asset\bundle.js
    filename: 'bundle.js' // output file name 
  },

};
