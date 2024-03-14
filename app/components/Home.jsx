import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation();

  console.log('meta-app-location-1', location);

  return (
    <React.Fragment>
      <div>Home Component</div>
    </React.Fragment>
  )
}

export default Home;
