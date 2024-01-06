import React from 'react';
import PropTypes from 'prop-types';

export const VideoViews = ({ videoViews }) => {
  return (
    <>
      <span className="video__views">조회수 {videoViews}회</span>
    </>
  );
};

VideoViews.propTypes = {
  videoViews: PropTypes.string.isRequired,
};

VideoViews.defaultProps = {
  videoViews: '5.6만',
};
