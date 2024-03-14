function postConfigs() {
  return {
    freshdeskDomain: 'myAccount.freshdesk.com',
    freshdeskApi: 'hello',
    openAiModal: 'open ai modal',
    openAiApiKey: 'open ai api key'
  }
}

function getConfigs(configs) {
  console.log("get-configs-1", configs);
  return configs;
}

function validate() {
  console.log('validate - called');
  return true;
}

window.getConfigs = getConfigs;
window.postConfigs = postConfigs;
window.validate = validate;





