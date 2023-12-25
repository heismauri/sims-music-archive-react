import React from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import NotFound from './NotFound';
import ArtistName from '../utils/ArtistName';
import Tracklist from '../components/Tracklist';

import releasesData from '../ReleasesData';

const Release = () => {
  const { slug } = useParams();
  const release = releasesData.find((r) => r.slug === slug);
  if (!release) {
    return <NotFound />;
  }
  return (
    <div id="release">
      <h1>{release.title}</h1>
      <h2>by {ArtistName(release.artists)}</h2>
      <div className="release__content">{parse(release.content)}</div>
      <div id="release__tracklist">
        <Tracklist discs={release.discs} />
      </div>
    </div>
  );
};

export default Release;
