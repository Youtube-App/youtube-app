import React from 'react';
import PropTypes from 'prop-types';

export const ChannelIdName = ({ ChannelIdName }) => {
  return (
    <>
      <span>{ChannelIdName}</span>
    </>
  );
};

ChannelIdName.propTypes = {
  ChannelIdName: PropTypes.string.isRequired,
};

ChannelIdName.defaultProps = {
  ChannelIdName: '@15ya.fullmoon',
};
