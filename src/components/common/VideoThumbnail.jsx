import React from 'react';
import PropTypes from 'prop-types';
import videoThumbnail from '../../images/ex-img-videoThumbnail.webp';

export const VideoThumbnail = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=w4IY7QU-uFg"
      className="video__thumbnail-wrap"
    >
      <img
        className="video__thumbnail-img"
        src={videoThumbnail}
        alt=""
      />
    </a>
  );
};

VideoThumbnail.propTypes = {
  VideoThumbnail: PropTypes.string,
};

VideoThumbnail.defaultProps = {
  VideoThumbnail: videoThumbnail,
};
