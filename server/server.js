const axios = require('axios');

exports = {
  invokeFromClient: function(options) {
    console.log('SMI - call', JSON.stringify(options));
    renderData(null, "Success response returned from server");
  },
  onTicketUpdateCallback: async function(payload) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log('json - placeholder', response);
    })
    .catch((error) => {
      console.log('json - placeholder - error', error);
    })
    console.log('iparam value', payload.iparams.openAiApiKey);
    console.log("Logging arguments from onTicketUpdate event: " + JSON.stringify(payload));
  }
};
