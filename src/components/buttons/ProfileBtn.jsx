import React from 'react';
import PropTypes from 'prop-types';
import profileImg from '../../images/ex-img-profile.jpeg';
import { Link } from 'react-router-dom';

export const ProfileBtn = ({ isBtn, size, channelId, profileImg }) => {
  return isBtn ? (
    <Link
      className={`profile__btn profile_btn--${size}`}
      to={channelId ? `/channel/${channelId}` : '#'}
    >
      <div className="profile__btn-img-wrapper">
        <img
          className="profile__btn-img"
          src={profileImg}
          alt=""
        />
      </div>
    </Link>
  ) : (
    <div className="profile__btn">
      <div className="profile__btn-img-wrapper">
        <img
          className="profile__btn-img"
          src={profileImg}
          alt=""
        />
      </div>
    </div>
  );
};

ProfileBtn.propTypes = {
  isBtn: PropTypes.bool,
  size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large', 'xlarge', 'xxl'])
    .isRequired,
  profileImg: PropTypes.string.isRequired,
  parameters: PropTypes.object,
  channelId: PropTypes.string,
};

ProfileBtn.defaultProps = {
  isBtn: true,
  size: 'small',
  profileImg,
  parameters: {
    reactRouter: {
      routePath: '/channel/:channelId',
      routeParams: { channelId: 'df23' },
    },
  },
};
