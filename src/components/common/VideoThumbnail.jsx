import React from 'react';
import PropTypes from 'prop-types';
// import videoThumbnail from '../../images/ex-img-videoThumbnail.webp';

export const VideoThumbnail = ({ VideoThumbnail }) => {
  return (
    <div className="video__thumbnail-wrap">
      <img
        className="video__thumbnail-img"
        src={VideoThumbnail}
        alt=""
      />
    </div>
  );
};

VideoThumbnail.propTypes = {
  VideoThumbnail: PropTypes.string,
  // size: PropTypes.string,
};

VideoThumbnail.defaultProps = {
  VideoThumbnail: '232',
  // size: '',
};
