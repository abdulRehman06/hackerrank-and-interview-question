const fetch = require('node-fetch');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));