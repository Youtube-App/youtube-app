import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { BtnCircleGhost } from 'components/buttons/BtnCircleGhost';
import { BtnRoundSquareGhost } from 'components/buttons/BtnRoundSquareGhost';
// import { DefaultDropdown } from 'components/dropdowns/DefaultDropdown';
import { PiThumbsUpLight } from 'react-icons/pi';
import { PiThumbsDownLight } from 'react-icons/pi';
import { IoIosHeart } from 'react-icons/io';
// import { IoMdMore } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
// import cn from 'classnames';

export const DefaultComment = ({ userName, date, comment, replyNum }) => {
  // const replyDropdown = [
  //   {
  //     type: 'menu',
  //     label: '신고',
  //   },
  // ];

  return (
    <div className="comment__wrapper">
      <div className="comment__highlight-chip">하이라이트 댓글</div>
      <div className="comment__container">
        <div className="comment__profile">
          <ProfileBtn />
        </div>
        <div className="comment__section">
          <div className="comment__create-info">
            <div className="comment__user">@{userName}</div>
            <div className="comment__date">{date} 전</div>
          </div>
          <div className="comment__contents">
            <p className="comment__item">{comment}</p>
            <button
              type="button"
              className="comment__more-btn"
            >
              자세히 보기
            </button>
          </div>
          <div className="comment__reaction">
            <BtnCircleGhost
              icon={<PiThumbsUpLight />}
              ariaLabel={'좋아요'}
            />
            <BtnCircleGhost
              icon={<PiThumbsDownLight />}
              ariaLabel={'싫어요'}
            />
            <div className="comment__creator-like">
              <ProfileBtn />
              <IoIosHeart />
            </div>
            <BtnRoundSquareGhost
              icon={''}
              label={'답글'}
            >
              답글
            </BtnRoundSquareGhost>
          </div>
        </div>
        {/* <DefaultDropdown
        size={'small'}
        icon={<IoMdMore />}
        list={replyDropdown}
      ></DefaultDropdown> */}
      </div>
      <div className="reply-section">
        <IoMdArrowDropdown />
        답글 {replyNum}개
      </div>
    </div>
  );
};

DefaultComment.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string,
  comment: PropTypes.string.isRequired,
  replyNum: PropTypes.number,
};

DefaultComment.defaultProps = {
  userName: '구독자A',
  date: '10시간',
  comment: '잘 보고 갑니다.',
  replyNum: 7,
};
