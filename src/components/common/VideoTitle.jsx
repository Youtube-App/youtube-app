import React from 'react';
import PropTypes from 'prop-types';

export const VideoTitle = ({ size, videoTitle }) => {
  return (
    <>
      <p className={`video__title ${size && `video__title--${size}`}`}>
        {videoTitle}
      </p>
    </>
  );
};

VideoTitle.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']).isRequired,
  videoTitle: PropTypes.string,
};

VideoTitle.defaultProps = {
  size: 'large',
  videoTitle: '2023 MBC 연예대상 시상식 비하인드 대방출',
};
