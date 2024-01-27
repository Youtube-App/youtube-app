import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Player } from '@lottiefiles/react-lottie-player';
import thumbUp from 'json/thumb_up.json';
import thumbDownFillIcon from 'images/icon-thumbs-fill.svg';
import thumbDownOutlineIcon from 'images/icon-thumbs-outline.svg';

export const BtnEmotion = ({ likes }) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectEmotion = (emotion) => {
    if (isSelected !== emotion) {
      setIsSelected(emotion);
    } else if (isSelected === emotion) {
      setIsSelected(false);
    }
  };

  return (
    <div className="btn__emotion">
      <button
        type="button"
        onClick={() => selectEmotion('like')}
      >
        <i className="btn__icon">
          {
            <Player
              src={thumbUp}
              autoplay
              keepLastFrame={true}
              // style={{ height: '50px', width: '50px' }}
            ></Player>
          }
        </i>
        <span className="btn__label">{likes}</span>
      </button>
      <button
        type="button"
        onClick={() => selectEmotion('dislike')}
        className={cn({
          'btn--active': isSelected === 'dislike',
        })}
      >
        <i className="btn__icon">
          {isSelected === 'dislike' ? (
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
