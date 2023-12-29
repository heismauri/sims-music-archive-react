import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../utils/SEO';
import releasesData from '../ReleasesData';
import ArtistName from '../utils/ArtistName';

const Releases = () => {
  const releases = releasesData;

  return (
    <div id="releases">
      <SEO title="Releases" />
      <h1>Releases</h1>
      <p>
        Here is an up to date list of all of our music releases so far. We are currently working on a number of custom
        soundtracks which we will release publicly as soon as they are complete.
      </p>
      <div className="row row-gap-3 gx-3">
        {releases.map((release, index) => (
          <Link to={release.slug} key={index} className="col-12 col-md-6 text-decoration-none">
            <div className="release__card d-flex p-4 gap-3 rounded-5 align-items-center">
              <img src={`/images/albums/${release.slug}.png`} width="150" alt={release.title} className="rounded-2" />
              <div>
                <h5 className="m-0 mb-2">{release.title}</h5>
                <p className="m-0">by {ArtistName(release.artists)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Releases;
