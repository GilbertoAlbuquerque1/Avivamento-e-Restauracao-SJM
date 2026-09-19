import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Sermons from '../../components/Sermons/Sermons';
import Help from '../../components/Help/Help';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Sermons />
      <Help />
    </>
  );
};

export default Home;
