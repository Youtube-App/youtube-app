import React from 'react';
import PropTypes from 'prop-types';
import { ProfileBtn } from '../buttons/ProfileBtn';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { IoMoonOutline } from 'react-icons/io5';
import { IoLanguageOutline } from 'react-icons/io5';
import { AiOutlineSafety } from 'react-icons/ai';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaRegKeyboard } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { VscReport } from 'react-icons/vsc';
import { SlArrowRight } from 'react-icons/sl';

export const Dropdown = ({ size, list }) => {
  const profileItem = list.find((item) => item.type === 'profile');
  const listItem = list.filter((item) => item.type !== 'profile');

  function renderList(item) {
    if (item.type === 'menu') {
      return (
        <div className="dropdown__container">
          <i className="dropdown__menu-icon">{item.icon}</i>
          <div className="dropdown__label">{item.label}</div>
          {item.isFold && (
            <i className="dropdown__fold-icon">
              <SlArrowRight />
            </i>
          )}
        </div>
      );
    }
    if (item.type === 'bar') {
      return <div className="dropdown-bar"></div>;
    }
  }
  return (
    <div
      className={`dropdown__wrapper ${size && `dropdown__wrapper--${size}`}`}
    >
      {profileItem && (
        <div className="dropdown__container dropdown__profile-container">
          <ProfileBtn />
          <div className="dropdown__label">
            <div className="dropdown__name">{profileItem.name}</div>
            <div className="dropdown__nickname">@{profileItem.nickname}</div>
            <a
              className="dropdown__link"
              href
            >
              Google 계정 관리
            </a>
          </div>
        </div>
      )}
      {listItem && (
        <div className="dropdown__scroll-container">
          {listItem.map((item) => (
            <React.Fragment key={item.label}>{renderList(item)}</React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']).isRequired,
  list: PropTypes.array,
};

Dropdown.defaultProps = {
  size: 'large',
  list: [
    {
      type: 'profile',
      name: '사용자',
      nickname: 'user-hb7xh8ho3c',
    },
    {
      type: 'menu',
      icon: <LiaUserCircleSolid />,
      label: 'YouTube의 내 데이터',
    },
    {
      type: 'menu',
      icon: <LiaUserCircleSolid />,
      label: 'YouTube의 내 데이터',
    },
    {
      type: 'menu',
      icon: <IoMoonOutline />,
      label: '디자인: 밝은 테마',
      isFold: true,
    },
    {
      type: 'menu',
      icon: <IoLanguageOutline />,
      label: '언어: 한국어',
      isFold: true,
    },
    {
      type: 'menu',
      icon: <AiOutlineSafety />,
      label: '제한 모드: 사용 안함',
      isFold: true,
    },
    {
      type: 'menu',
      icon: <AiOutlineGlobal />,
      label: '위치: 한국',
      isFold: true,
    },
    {
      type: 'menu',
      icon: <FaRegKeyboard />,
      label: '단축키',
    },
    {
      type: 'bar',
    },
    {
      type: 'menu',
      icon: <IoSettingsOutline />,
      label: '설정',
    },
    {
      type: 'bar',
    },
    {
      type: 'menu',
      icon: <AiOutlineQuestionCircle />,
      label: '고객센터',
    },
    {
      type: 'menu',
      icon: <VscReport />,
      label: '의견 보내기',
    },
  ],
};
