import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import ZipScreenFeatures from '../components/Home/ZipScreenFeatures';
import ShutterFeatures from '../components/Home/ShutterFeatures';
import Projects from '../components/Home/Projects';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <ZipScreenFeatures />
      <ShutterFeatures />
      <Projects />
    </>
  );
};

export default Home;