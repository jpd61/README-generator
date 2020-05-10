// Api call to Axios
const axios = require("axios");

function apiCall( username ) {
  const queryUrl = `https://api.github.com/users/${username}`;

  return axios
  .get(queryUrl)
  .then(function(response){
    
    const result = {
        avatar_url: response.data.avatar_url,
    }
    return result;
  })
};

module.exports = apiCall;