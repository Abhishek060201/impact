import React from 'react';
import Main from './Main/Main';
import WhyUs from './WhyUs';
import GrowingBusiness from './GrowingBusiness/GrowingBusiness';
import Reviews from './Reviews/Reviews';
import Blogs from './Blogs';

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
