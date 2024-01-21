import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { BtnCircleGhost } from 'components/buttons/BtnCircleGhost';
import { BtnRoundGhost } from 'components/buttons/BtnRoundGhost';
import { BtnRoundGhostBlue } from 'components/buttons/BtnRoundGhostBlue';
import { BtnCircleGhostBlue } from 'components/buttons/BtnCircleGhostBlue';
import { DefaultDropdown } from 'components/dropdowns/DefaultDropdown';
import { PiThumbsUpLight } from 'react-icons/pi';
import { PiThumbsUpFill } from 'react-icons/pi';
import { PiThumbsDownLight } from 'react-icons/pi';
import { PiThumbsDownFill } from 'react-icons/pi';
import { IoIosHeart } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import { AiOutlineMore } from 'react-icons/ai';
import { IoFlagOutline } from 'react-icons/io5';

export const DefaultComment = ({
  isOpen,
  userName,
  date,
  comment,
  replyNum,
  hasCreatorReply,
}) => {
  const [initialOpen, setIsOpen] = useState(isOpen);

  const replyDropdown = [
    {
      type: 'menu',
      icon: <IoFlagOutline />,
      label: '신고',
    },
  ];

  return (
    <>
      <div className="comment__wrapper">
        <div className="comment__highlight-chip">하이라이트 댓글</div>
        <div className="comment__container">
          <div className="comment__profile">
            <ProfileBtn size={'large'} />
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
                activeIcon={<PiThumbsUpFill />}
                ariaLabel={'좋아요'}
                isToggle={true}
              />
              <span className="comment__like-num">6</span>
              <BtnCircleGhost
                icon={<PiThumbsDownLight />}
                activeIcon={<PiThumbsDownFill />}
                ariaLabel={'싫어요'}
                isToggle={true}
              />
              <div className="comment__creator-like">
                <ProfileBtn size={'xSmall'} />
                <IoIosHeart />
              </div>
              <BtnRoundGhost label={'답글'}></BtnRoundGhost>
            </div>
          </div>
          <div className="comment__dropdown-section">
            <DefaultDropdown
              size={'small'}
              list={replyDropdown}
            >
              <BtnCircleGhost icon={<AiOutlineMore />} />
            </DefaultDropdown>
          </div>
        </div>
        <div
          className="comment__reply-btn"
          role="presentation"
          onClick={() => setIsOpen(!initialOpen)}
        >
          {!hasCreatorReply ? (
            <>
              <BtnCircleGhostBlue
                icon={initialOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              />
              <div className="comment__reply-badge">
                <ProfileBtn size={'small'} />
                <span className="comment__reply-dot"></span>
              </div>
              <BtnRoundGhostBlue label={`답글 ${replyNum}개`} />
            </>
          ) : (
            <>
              <BtnRoundGhostBlue
                icon={initialOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                label={`답글 ${replyNum}개`}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

DefaultComment.propTypes = {
  isOpen: PropTypes.boolean,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string,
  comment: PropTypes.string.isRequired,
  likeNum: PropTypes.number,
  replyNum: PropTypes.number,
  hasCreatorReply: PropTypes.bool,
};

DefaultComment.defaultProps = {
  isOpen: true,
  userName: '구독자A',
  date: '10시간',
  comment: '잘 보고 갑니다.',
  likeNum: 3,
  replyNum: 7,
  hasCreatorReply: true,
};
