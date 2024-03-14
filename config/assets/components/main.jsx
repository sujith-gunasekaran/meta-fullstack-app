import React, { useState, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client';
import Iparam from './Iparam';
import '../iparams';

const App = () => {

  const [child, setChild] = useState(<h3>Iparam is loading</h3>)

  useLayoutEffect(() => {
    window.app.initialized().then((client) => {
      console.log('iparam - initiated - 1', client);
      window.client = client;
      setChild((<Iparam />))
    })
  }, [])

  return (
    <div>
      {child}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


