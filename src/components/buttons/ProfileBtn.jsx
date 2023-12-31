import React from 'react';
import PropTypes from 'prop-types';
import profileImg from '../../images/ex-img-profile.jpeg';

export const ProfileBtn = ({ profileImg }) => {
  return (
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
  profileImg: PropTypes.string.isRequired,
};

ProfileBtn.defaultProps = {
  profileImg,
};
