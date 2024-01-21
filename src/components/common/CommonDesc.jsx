import React from 'react';
import PropTypes from 'prop-types';

export const CommonDesc = ({ txt }) => {
  return <div>{txt}</div>;
};

CommonDesc.propTypes = {
  txt: PropTypes.string,
};

CommonDesc.defaultProps = {
  txt: '누구보다 바게트에 진심이었던 빠니바게트를 위한 헌정 영상.',
};
