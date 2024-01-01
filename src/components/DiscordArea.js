import React from 'react';

import jazzSim from '../assets/jazz-sim.png';
import theSimsLogo from '../assets/logos/ts1.png';
import theSimsBustinOutLogo from '../assets/logos/tsbo.png';
import theSimsOnlineLogo from '../assets/logos/tso.png';
import theSimsUrbzLogo from '../assets/logos/tsu.png';
import { ReactComponent as CommunityIcon } from '../assets/community-icon.svg';

const DiscordArea = () => {
  return (
    <section id="discord-area">
      <h2 className="mt-5 mb-4">Join our Discord server!</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-8">
          <div className="discord-card row row rounded-5 mx-0 row-gap-3 justify-content-center">
            <div className="discord-card__body col-12 col-md-6 p-0 order-2 order-md-1 d-flex flex-column">
              <p className="text-white">
                We are looking for <strong>similarly minded people</strong> who would be interested in helping
                us <strong>source some of the harder to find music</strong> from the series in the highest quality
                possible. We would also like to <strong>build a community of people</strong> who love The Sims music and
                would like to discuss it with others.
              </p>
              <a href="https://discord.gg/r5DNAywy7m" target="_blank" rel="noreferrer"
                className="text-decoration-none mt-auto">
                <div className="btn btn-action d-flex flex-row align-items-center rounded-4 py-2 px-3">
                  <div className="flex-grow-1 text-start">
                    <p className="action-text m-0 text-uppercase">Interested?</p>
                    <p className="fs-5 m-0"><strong>Become a member</strong></p>
                  </div>
                  <CommunityIcon />
                </div>
              </a>
            </div>
            <div className="discord-card__image text-center col-12 col-md-6 order-1 position-relative">
              <img src={jazzSim} alt="Jazz Sim" width="320" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 text-center missing-titles mt-4 mt-lg-0">
          <p className="text-muted mx-auto">
            We are still looking for music from the following games in the series
          </p>
          <div className="row justify-content-center align-items-center align-content-center gx-3 row-gap-3 mx-auto">
            <div className="col-6 text-center filter-grayscale">
              <img src={theSimsLogo} width="120" alt="The Sims" />
            </div>
            <div className="col-6 text-center filter-grayscale">
              <img src={theSimsBustinOutLogo} width="120" alt="The Sims Bustin' Out" />
            </div>
            <div className="col-6 text-center filter-grayscale">
              <img src={theSimsOnlineLogo} width="120" alt="The Sims Online" />
            </div>
            <div className="col-6 text-center filter-grayscale">
              <img src={theSimsUrbzLogo} width="120" alt="The Sims Urbz" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordArea;
