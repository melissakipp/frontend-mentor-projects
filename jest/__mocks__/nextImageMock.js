import React from 'react';

const Image = ({ src, alt, ...props }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} {...props} data-testid="next-image" />;
};

export default Image;