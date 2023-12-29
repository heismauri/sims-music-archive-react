import React from 'react';

import { ReactComponent as DownloadIcon } from '../assets/download-icon.svg';

const ReleaseLink = ({ link }) => {
  return (
    <a href={link.url} className="text-decoration-none">
      <div className="btn btn-action d-flex flex-row align-items-center rounded-4 py-2 px-3">
        <div className="flex-grow-1 text-start">
          <p className="action-text m-0 text-uppercase">{link.name}</p>
          <p className="fs-5 m-0"><strong>Download</strong></p>
        </div>
        <DownloadIcon />
      </div>
    </a>
  );
};

export default ReleaseLink;
