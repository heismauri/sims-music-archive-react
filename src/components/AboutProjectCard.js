import React from 'react';

import businessSim from '../assets/business-sim.png';

const AboutProjectCard = () => {
  return (
    <section id="about-project">
      <h2 className="mt-5 mb-4">About the Project</h2>
      <div className="about-project-card row rounded-5 mx-0 row-gap-3 justify-content-center">
        <div className="about-project-card__body col order-2 order-md-1 p-0">
          <p>
            We are a team of <strong>passionate</strong> fans of The Sims franchise, especially its dedication to
            producing spectacular soundtracks full of all sorts of genres from <strong>Jazz to Reggae</strong>. It truly
            is an eclectic mix of music and is known to be some people&apos;s first introduction to these genres. As a
            fan base, it also unlocks some key <strong>nostalgic memories</strong> which we want to preserve for future
            generations.
          </p>
          <p className="mb-0">
            The goal of this project is to identify and source the <strong>highest quality music</strong> officially or
            unofficially released for any of the games within the original series. This includes any music that appears
            in-game, on radio stations or used within promotional materials. <strong>We want them all</strong> and will
            leave no stone unturned.
          </p>
        </div>
        <div className="about-project-card__image position-relative col-auto order-1">
          <img src={businessSim} alt="Business Sim" />
        </div>
      </div>
    </section>
  );
};

export default AboutProjectCard;
