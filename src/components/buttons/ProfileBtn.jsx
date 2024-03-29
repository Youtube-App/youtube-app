import React from 'react';
import PropTypes from 'prop-types';
import profileImg from '../../images/ex-img-profile.jpeg';
import { Link } from 'react-router-dom';

export const ProfileBtn = ({ isLink, size, channelId, profileImg }) => {
  return isLink ? (
    <Link
      className={`profile__btn ${size && `profile__btn--${size}`}`}
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
  isLink: PropTypes.bool,
  size: PropTypes.oneOf([
    'xSmall',
    'small',
    'medium',
    'large',
    'xLarge',
    'xxlarge',
  ]),
  profileImg: PropTypes.string.isRequired,
  parameters: PropTypes.object,
  channelId: PropTypes.string,
};

ProfileBtn.defaultProps = {
  isLink: true,
  size: 'small',
  profileImg,
  parameters: {
    reactRouter: {
      routePath: '/channel/:channelId',
      routeParams: { channelId: 'df23' },
    },
  },
};
