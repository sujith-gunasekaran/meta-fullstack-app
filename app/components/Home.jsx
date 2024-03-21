import React from 'react';

const Home = () => {

  const makeSmiCall = async () => {
    try {
      const options = { hello: 'hello' };
      const response = await window.client.request.invoke("invokeFromClient", options);
      console.log('client - success', response);
    } catch(error) {
      console.log("client - error", error);
    }
  }

  const openModal = () => {
    window.client.interface
		.trigger("showModal", {
			title: "Sample Modal",
			template: "interface/index.html",
		})
		.then(function (data) {
			console.info("modal displayed");
			console.info(data);
		})
		.catch(function (error) {
			console.error("Unable to display modal");
			console.error(error);
		});

  }

  React.useEffect(() => {
    makeSmiCall();
  },[])

  return (
    <React.Fragment>
      <div>Home Component - 1</div>
      <button onClick={() => openModal()}>Open interface</button>
    </React.Fragment>
  )
}

export default Home;
