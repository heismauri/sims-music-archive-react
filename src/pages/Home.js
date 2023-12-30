import React from 'react';

import SEO from '../utils/SEO';
import UpcomingReleases from '../components/UpcomingReleases';

const Home = () => {
  return (
    <div>
      <SEO />
      Welcome Home!
      <UpcomingReleases />
    </div>
  );
};

export default Home;
