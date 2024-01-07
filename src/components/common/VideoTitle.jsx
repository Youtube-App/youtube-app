import React from 'react';
import PropTypes from 'prop-types';

export const VideoTitle = ({ videoTitle }) => {
  return (
    <>
      <p className={'video__title'}>{videoTitle}</p>
    </>
  );
};

VideoTitle.propTypes = {
  videoTitle: PropTypes.string,
};

VideoTitle.defaultProps = {
  videoTitle: '2023 MBC 연예대상 시상식 비하인드 대방출',
};
