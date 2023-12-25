import React from 'react';
import { Link } from 'react-router-dom';

import releasesData from '../ReleasesData';

const Releases = () => {
  const releases = releasesData;

  return (
    <ul className="releases">
      {releases.map((release) => (
        <li className="release" key={release.id}>
          <Link to={release.slug}>{release.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Releases;
