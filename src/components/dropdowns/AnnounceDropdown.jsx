import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { BtnCirclePrimary } from 'components/buttons/BtnCirclePrimary';
import { BtnCircleSecondary } from '../buttons/BtnCircleSecondary';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { IoLogoYoutube } from 'react-icons/io5';
import { VideoThumbnail } from 'components/common/VideoThumbnail';
import { IoMdMore } from 'react-icons/io';

export const AnnounceDropdown = ({ size, list, children }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function handleClickOutside(e) {
      const isInside = dropdownRef?.current?.contains(e.target);
      if (dropdownRef && !isInside) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="dropdown__wrapper"
      ref={dropdownRef}
    >
      <div
        role="presentation"
        className="dropdown__children"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </div>
      {isOpen && (
        <div
          className={`dropdown__container ${
            size && `dropdown__container--${size}`
          }`}
        >
          <div className="dropdown__section dropdown__announce-section">
            <div className="dropdown__label">알림</div>
            <BtnCircleSecondary icon={<IoSettingsOutline />} />
          </div>
          <div className="dropdown__scroll-section">
            {list.length > 0 && (
              <>
                {list.map((item, idx) => (
                  <div
                    className="dropdown__announce-area"
                    key={idx}
                  >
                    <i className="dropdown__read-icon"></i>
                    {item.thumbnail || (
                      <i className="dropdown__youtube-icon">
                        <IoLogoYoutube />
                      </i>
                    )}
                    <div className="dropdown__content">
                      <div className="dropdown__message">
                        {item.announce} {item.comment}
                      </div>
                      <div className="dropdown__time">{item.time} 전</div>
                    </div>
                    <div className="dropdown__video-thumbnail">
                      <VideoThumbnail />
                    </div>
                    <i className="dropdown__more-icon">
                      <IoMdMore />
                    </i>
                  </div>
                ))}
              </>
            )}
            {list.length === 0 && (
              <div className="dropdown__no-data">
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
      )}
    </div>
  );
};

AnnounceDropdown.propTypes = {
  size: PropTypes.oneOf(['xlarge']).isRequired,
  list: PropTypes.array,
  children: PropTypes.any,
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
  children: <BtnCirclePrimary />,
};
