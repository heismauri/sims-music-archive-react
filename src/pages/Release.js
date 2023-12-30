import React from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import SEO from '../utils/SEO';
import NotFound from './NotFound';
import ArtistName from '../utils/ArtistName';
import Tracklist from '../components/Tracklist';
import ReleaseLink from '../components/ReleaseLink';

import { releasesData } from '../SMAData';

const Release = () => {
  const { slug } = useParams();
  const release = releasesData.find((r) => r.slug === slug);
  if (!release) {
    return <NotFound />;
  }
  return (
    <div id="release">
      <SEO title={release.title} image={`/images/albums/${release.slug}.png`} />
      <div className="row gx-3 row-gap-3 mb-5">
        <div className="release__artwork col-md-6 order-md-1 mb-4 mb-md-0">
          <div className="rounded-5 overflow-hidden fade-in-up">
            <img src={`/images/albums/${release.slug}.png`} alt={`${release.title} artwork`} />
          </div>
        </div>
        <div className="release__information col-md-6 order-md-0">
          <div className="mb-4">
            <h1>{release.title}</h1>
            <h4 className="text-secondary fw-bold">by {ArtistName(release.artists)}</h4>
          </div>
          <div className="release__content">
            {parse(release.content)}
          </div>
        </div>
      </div>
      <div className="row gx-3 row-gap-3 mb-5">
        <div className="col-md-6">
          <div className="row row-gap-3">
            {release.links.map((link, index) => (
              <ReleaseLink key={index} link={link} />
            ))}
          </div>
        </div>
        <div className="col-md-6 lh-0">
          <iframe
            title={release.title}
            src={release.iframe}
            loading="lazy"
            className="rounded-4 overflow-hidden w-100 border-0"
          ></iframe>
        </div>
      </div>
       <Tracklist discs={release.discs} />
    </div>
  );
};

export default Release;
