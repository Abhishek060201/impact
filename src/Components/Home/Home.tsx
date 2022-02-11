import React from 'react';
import Main from './Main/Main';
import WhyUs from './WhyUs/WhyUs';
import GrowingBusiness from './GrowingBusiness/GrowingBusiness';
import Reviews from './Reviews/Reviews';
import Blogs from './Blogs/Blogs';
import './Home.css';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="home text-white">
      <Main />
      <WhyUs />
      <GrowingBusiness />
      <Reviews />
      <Blogs />
    </div>
  );
};

export default Home;
