import React, { useState, useLayoutEffect } from 'react';
import App from './App';
import store from '../store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import '../styles/style.css';


const Main = () => {

  console.log('main render');

  const [child, setChild] = useState(<h3>App is loading</h3>)

  useLayoutEffect(() => {
    window.app.initialized().then((client) => {
      window.client = client;
      setChild((<App />))
    })
  }, [])

  return (
    <div>
      {child}
    </div>
  )

}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);
