import React from 'react';
import PropTypes from 'prop-types';
import videoThumbnail from '../../images/ex-img-videoThumbnail.webp';

export const VideoThumbnail = () => {
  return (
    <div className="video__thumbnail-wrap">
      <img
        className="video__thumbnail-img"
        src={videoThumbnail}
        alt=""
      />
    </div>
  );
};

VideoThumbnail.propTypes = {
  VideoThumbnail: PropTypes.string,
};

VideoThumbnail.defaultProps = {
  VideoThumbnail: videoThumbnail,
};
