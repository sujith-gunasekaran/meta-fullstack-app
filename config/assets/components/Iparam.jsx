import React from 'react';
import { FwInlineMessage } from '@freshworks/crayons/react';

const Iparam = () => {

  const [iparamData, setIparamData] = React.useState({
    freshdeskDomain: '',
    freshdeskApi: '',
    openAiModal: '',
    openAiApiKey: ''
  });

  const handleInputChange = (e) => {
    setIparamData((prevValue) => {
      const data = {
        ...prevValue,
        [e.target.name]: e.target.value
      };
      console.log('setState - 1', data);
      return data;
    });
  } 

  return (
    <React.Fragment>
      <form>
        <div class="container-fluid">

          <FwInlineMessage closable open type="error">Invalid account API key</FwInlineMessage>
          <FwInlineMessage closable open type="error">Invalid Open AI API key</FwInlineMessage>
          <div>Freshdesk Domain</div>
          <input type="text" label="Freshdesk domain" size="30"
          placeholder="subdomain.freshdesk.com" name="freshdeskDomain" className="domain"
          onChange={handleInputChange}
          value={iparamData.freshdeskDomain}
          />
          <div>Freshdesk API</div>
          <input type="password"
          placeholder="Freshdesk Portal > Profile > Copy API Key" minlength="5" size="30"
          className="api-secure-field" name="freshdeskApi"
          value={iparamData.freshdeskApi}
          onChange={handleInputChange}
          />
          <div>Open AI Modal</div>    
          <input type="text" label="Open AI Model" size="30"
          placeholder="Enter your open ai model" className="open-ai-modal" name="openAiModal"
          value={iparamData.openAiModal}
          onChange={handleInputChange}
          />
          <div>Open AI API key</div>
          <input type="password"
          placeholder="open ai api key" required="true" minlength="5" size="30"
          className="openai-secure-field" name="openAiApiKey"
          value={iparamData.openAiApiKey}
          onChange={handleInputChange}
          />
        </div>
      </form>
    </React.Fragment>
  )

}

export default Iparam;
