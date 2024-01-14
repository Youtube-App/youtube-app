import React from 'react';
import PropTypes from 'prop-types';
import profileImg from '../../images/ex-img-profile.jpeg';
import { Link } from 'react-router-dom';
// import { reactRouterParameters } from 'storybook-addon-react-router-v6';
// import { reactRouterParameters } from 'storybook-addon-react-router-v6';

export const ProfileBtn = ({ channelId, profileImg }) => {
  return (
    <Link to={channelId ? `/channel/${channelId}` : '#'}>
      <div className="profile__btn">
        <div className="profile__btn-img-wrapper">
          <img
            className="profile__btn-img"
            src={profileImg}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

ProfileBtn.propTypes = {
  profileImg: PropTypes.string.isRequired,
  parameters: PropTypes.object,
  channelId: PropTypes.string,
};

ProfileBtn.defaultProps = {
  profileImg,
  channelId: '12',
  parameters: {
    reactRouter: {
      routerPath: '/channel',
      routerState: { channelId: 'dfdf' },
    },
  },
  // parameters: {
  //   reactRouter: {
  //     routePath: '/channel/:channelId',
  //     routeParams: { channelId: '123' },
  //   },
  // },
};
