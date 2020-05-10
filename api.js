// Api call to Axios
const axios = require("axios");

function apiCall( username ) {
  const queryUrl = `https://api.github.com/users/${username}`;
  console.log(queryUrl)
  return axios
  .get(queryUrl)
  .then(function(response){
    
    const result = {
        avatar_url: response.data.avatar_url,
        email : (response.data.email) ? response.email : response.email
    }
    return result;
  })
};

module.exports = apiCall;