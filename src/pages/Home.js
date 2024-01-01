import React from 'react';

import SEO from '../utils/SEO';
import UpcomingReleases from '../components/UpcomingReleases';
import AboutProjectCard from '../components/AboutProjectCard';
import DiscordArea from '../components/DiscordArea';

const Home = () => {
  return (
    <>
      <SEO />
      Welcome Home!
      <UpcomingReleases />
      <AboutProjectCard />
      <DiscordArea />
    </>
  );
};

export default Home;
