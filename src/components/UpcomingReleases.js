import React from 'react';

import { upcomingReleasesData } from '../SMAData';

const UpcomingReleases = () => {
  return (
    <section id="upcoming-releases">
      <h2 className="mb-3">Upcoming releases</h2>
      <div className="row gx-3 row-gap-3">
        {upcomingReleasesData.map((soundtrack, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="upcoming-release__card bg-light-gray p-4 rounded-4">
              <div className="row gx-3">
                <div className="col-auto">
                  <img src={`/images/albums/${soundtrack.slug}.png`} alt={soundtrack.title} className="rounded-4"
                    width="70" />
                </div>
                <div className="col">
                  <h5 className="m-0">{soundtrack.title}</h5>
                  <h6 className="fw-light text-muted m-0">{soundtrack.artist}</h6>
                </div>
              </div>
              <p className="fw-light text-muted opacity-75 mb-1 mt-2"><small>Current progress...</small></p>
              <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar rounded-5 bg-primary" role="progressbar"
                  aria-valuemin="0" aria-valuemax="100"
                  style={{ width: `${soundtrack.progress}%` }} aria-valuenow={soundtrack.progress} ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingReleases;
