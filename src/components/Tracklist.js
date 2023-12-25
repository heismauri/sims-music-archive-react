import React, { useState } from 'react';
import PropTypes from 'prop-types';

const leadingZero = (num, places = 2) => String(num).padStart(places, '0');

const Tracklist = ({ discs }) => {
  const [selectedDisc, setSelectedDisc] = useState(0);

  const handleDiscChange = (event) => {
    setSelectedDisc(parseInt(event.target.value, 10));
  };

  return (
    <div className="release__tracklist">
      <div className="release__tracklist-selector">
        {discs.map((_, index) => (
          <div key={index}>
            <input
              type="radio"
              name="discs"
              id={`disc-${index + 1}`}
              value={index}
              checked={selectedDisc === index}
              onChange={handleDiscChange}
            />
            <label htmlFor={`disc-${index + 1}`}>Disc {index + 1}</label>
          </div>
        ))}
      </div>

      <div id="tracklist-area">
        {discs.map((disc, index) => (
          <div
            key={index}
            className="disc-tracklist"
            style={{ display: selectedDisc === index ? 'block' : 'none' }}
          >
            <ul>
              {disc.map((track, trackIndex) => (
                <li key={trackIndex}>
                  <span className="track-no">{leadingZero(trackIndex + 1)}.</span>
                  {track}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

Tracklist.propTypes = {
  discs: PropTypes.array.isRequired,
};

export default Tracklist;
