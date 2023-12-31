import React from 'react';

import SEO from '../utils/SEO';
import UpcomingReleases from '../components/UpcomingReleases';
import AboutProjectCard from '../components/AboutProjectCard';

const Home = () => {
  return (
    <>
      <SEO />
      Welcome Home!
      <UpcomingReleases />
      <AboutProjectCard />
    </>
  );
};

export default Home;
