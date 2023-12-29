import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Sims Music Archive';
const SITE_TITLE = `${SITE_NAME} | Preserving the Music of The Sims`;
const SITE_DESCRIPTION = 'We are a team of passionate fans of The Sims franchise. Our goal is to identify and source '
                         + 'the music from these games in the highest quality FLAC or MP3 releases for preservation '
                         + 'purposes. The games in this series include The Sims and it\'s many expansions, The Sims '
                         + 'Bustin\' Out, The Sims Online & Urbz Sims in the City.';

const SEO = ({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  image = '/images/social-sim.png',
  name = SITE_NAME,
  type = 'article'
}) => {
  const formattedTitle = (title === SITE_TITLE) ? title : `${title} | ${SITE_NAME}`;
  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      { /* End standard metadata tags */ }
      { /* Facebook tags */ }
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      { /* End Facebook tags */ }
      { /* Twitter tags */ }
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      { /* End Twitter tags */ }
    </Helmet>
  );
};

export default SEO;
