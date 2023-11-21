


const axios = require('axios');

axios.post('https://alert-manager.block-stars-dev.com/api/v1/projects/bc9c672b-5241-42ad-8e03-fece32109998', {

    severity_level: "normal",
    error_msg: "dev-shahan testing 3"

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });