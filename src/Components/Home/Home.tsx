import React from 'react';
import Main from './Main/Main';
import WhyUs from './WhyUs/WhyUs';
import './Home.css';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="home text-white">
        <Main />
      <WhyUs />
    </div>
  );
};

export default Home;
