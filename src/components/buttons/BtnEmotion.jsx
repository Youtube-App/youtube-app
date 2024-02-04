import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Player } from '@lottiefiles/react-lottie-player';
import thumbUp from 'json/thumb_up.json';
import thumbDownFillIcon from 'images/icon-thumbs-fill.svg';
import thumbDownOutlineIcon from 'images/icon-thumbs-outline.svg';

export const BtnEmotion = ({ likes }) => {
  const [selectedEmotion, setSelectedEmotion] = useState();
  // 좋아요 싫어요 암것도 아니에여

  const clickLike = (emotion) => {
    if (selectedEmotion === emotion) {
      setSelectedEmotion();
    } else {
      setSelectedEmotion(emotion);
    }
  };

  return (
    <div className="emotion__btn">
      <button
        type="button"
        onClick={() => clickLike('like')}
      >
        {selectedEmotion === 'like' ? (
          <i className="btn__icon">
            {
              <Player
                src={thumbUp}
                autoplay
                keepLastFrame={true}
              ></Player>
            }
          </i>
        ) : (
          <i className="btn__icon"></i>
        )}
        <span className="btn__label">{likes}</span>
      </button>
      <button
        type="button"
        onClick={() => clickLike('dislike')}
        className={cn({
          'btn--active': selectedEmotion === 'dislike',
        })}
      >
        <i className="btn__icon">
          {selectedEmotion === 'dislike' ? (
            <img
              src={thumbDownFillIcon}
              alt=""
            />
          ) : (
            <img
              src={thumbDownOutlineIcon}
              alt=""
            />
          )}
        </i>
      </button>
    </div>
  );
};

BtnEmotion.propTypes = {
  likes: PropTypes.string,
};

BtnEmotion.defaultProps = {
  likes: '33만',
};
