import React, { useState } from 'react';

const leadingZero = (num, places = 2) => String(num).padStart(places, '0');

const Tracklist = ({ discs }) => {
  const [selectedDisc, setSelectedDisc] = useState(0);

  const handleDiscChange = (event) => {
    setSelectedDisc(parseInt(event.target.value, 10));
  };

  return (
    <div id="release__tracklist" className="bg-black text-white rounded-5 p-4 mt-5">
      {discs.length > 1
        && <div className="release__tracklist-selector mb-4">
          {discs.map((_, index) => (
            <span key={index}>
              <input
                type="radio"
                name="discs"
                className="d-none"
                id={`disc-${index + 1}`}
                value={index}
                checked={selectedDisc === index}
                onChange={handleDiscChange}
              />
              <label className="px-4 py-1 fw-bolder rounded-5 me-1" htmlFor={`disc-${index + 1}`}>
                Disc {index + 1}
              </label>
            </span>
          ))}
        </div>
      }
      <div className="release__tracklist-area">
        {discs.map((disc, index) => (
          <div
            key={index}
            className="disc-tracklist"
            style={{ display: selectedDisc === index ? 'block' : 'none' }}
          >
            <ul className="list-unstyled m-0">
              {disc.map((track, trackIndex) => (
                <li key={trackIndex}>
                  <strong className="me-2">{leadingZero(trackIndex + 1)}.</strong>
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

export default Tracklist;
