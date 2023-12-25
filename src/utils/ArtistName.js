const ArtistName = (artists) => {
  if (artists.length === 1) {
    return artists[0];
  }
  return artists.join(', ').replace(/,(?=[^,]*$)/, ' &');
};

export default ArtistName;
