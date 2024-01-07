import React from 'react';
import PropTypes from 'prop-types';
import { BtnCircleSecondary } from '../buttons/BtnCircleSecondary';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';

export const AnnounceDropdown = ({ size }) => {
  return (
    <div
      className={`dropdown__wrapper ${size && `dropdown__wrapper--${size}`}`}
    >
      <div className="dropdown__container dropdown__announce-container">
        <div className="dropdown__label">알림</div>
        <BtnCircleSecondary icon={<IoSettingsOutline />} />
      </div>
      <div className="dropdown__scroll-container">
        {false && <div className="dropdown__container"></div>}
        {true && (
          <div className="dropdown__no-data-section">
            <i className="dropdown__bell-icon">
              <GoBell />
            </i>
            <div className="dropdown__no-data-message">
              여기에 알림이 표시됩니다.
            </div>
            <div className="dropdown__no-data-description">
              즐겨찾는 채널을 구독하여 최신 동영상의 알림을 받아 보세요.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

AnnounceDropdown.propTypes = {
  size: PropTypes.oneOf(['xlarge']).isRequired,
  list: PropTypes.array,
};

AnnounceDropdown.defaultProps = {
  size: 'xlarge',
  list: [
    {
      type: 'menu',
      name: '사용자',
      nickname: 'user-hb7xh8ho3c',
    },
    {
      type: 'menu',
      name: '사용자',
      nickname: 'user-hb7xh8ho3c',
    },
  ],
};
