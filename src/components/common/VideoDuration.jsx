import React from 'react';
import PropTypes from 'prop-types';

export const VideoDuration = ({ time }) => {
  return <span className="video__duration">{time}</span>;
};

VideoDuration.propTypes = {
  time: PropTypes.string,
};

VideoDuration.defaultProps = {
  time: '5:20',
};
