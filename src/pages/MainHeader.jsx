import React from 'react';
import { BtnCircleGhost } from 'components/buttons/BtnCircleGhost';
import { BtnCircleGray } from 'components/buttons/BtnCircleGray';
import youtubeLogo from 'images/youtube-logo.svg';
import { HeaderInput } from 'components/inputs/HeaderInput';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineVideoCamera } from 'react-icons/hi2';
import { BsBell } from 'react-icons/bs';
import { IoMicSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const MainHeader = () => {
  return (
    <div className="main__header-wrapper">
      <div className="main__menu-container">
        <BtnCircleGhost icon={<RxHamburgerMenu />} />
        <Link to="/">
          <img
            className="main__logo"
            src={youtubeLogo}
            alt="youtube logo"
          />
        </Link>
      </div>
      <div className="main__search-container">
        <div className="main__input-section">
          <HeaderInput />
        </div>
        <div className="main__mic-btn">
          <BtnCircleGray icon={<IoMicSharp />} />
        </div>
      </div>
      <div className="main__user-container">
        <div className="main__user-btn-section">
          <BtnCircleGhost icon={<HiOutlineVideoCamera />} />
        </div>
        <div className="main__user-btn-section">
          <BtnCircleGhost icon={<BsBell />} />
        </div>
        <div className="main__user-profile-section">
          <ProfileBtn size={'medium'} />
        </div>
      </div>
    </div>
  );
};

MainHeader.propTypes = {};

MainHeader.defaultProps = {};
