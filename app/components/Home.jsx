import React from 'react';
import svgImage from 'app/public/icons/image-one.svg';

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
			template: "modal.html",
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

  const openDialog = () => {
    window.client.interface
		.trigger("showDialog", {
			title: "Sample Dialog",
			template: "dialog.html",
		})
		.then(function (data) {
			console.info("dialog displayed");
			console.info(data);
		})
		.catch(function (error) {
			console.error("Unable to display dialog");
			console.error(error);
		});
  }

  React.useEffect(() => {
    makeSmiCall();
  },[])

  return (
    <React.Fragment>
      <div>Home Component - 1</div>
      <img src={svgImage} alt="hello-1" />
      <button onClick={() => openModal()}>Open interface</button>
      <button onClick={() => openDialog()}>Open Dialog</button>
    </React.Fragment>
  )
}

export default Home;
