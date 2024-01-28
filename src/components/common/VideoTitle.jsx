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
  videoTitle:
    '[미리보기] 사람이 직접 돌리는 관람차라고?!?! 🏃🏻‍♂환상의 마다랜드🏃🏻‍♂ #태어난김에세계일주3 EP.7',
};

// 게시자: 태계일주 베이스캠프 조회수 63,011회 1일 전 2분 59초
