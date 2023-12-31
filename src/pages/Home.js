import React from 'react';

import SEO from '../utils/SEO';
import UpcomingReleases from '../components/UpcomingReleases';

const Home = () => {
  return (
    <>
      <SEO />
      Welcome Home!
      <UpcomingReleases />
    </>
  );
};

export default Home;
