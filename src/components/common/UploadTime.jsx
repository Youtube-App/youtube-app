import React from 'react';
import PropTypes from 'prop-types';

export const UploadTime = ({ uploadTime }) => {
  return (
    <>
      <span className="video__upload-time">{uploadTime} 전</span>
    </>
  );
};

UploadTime.propTypes = {
  uploadTime: PropTypes.string.isRequired,
};

UploadTime.defaultProps = {
  uploadTime: '4시간',
};
