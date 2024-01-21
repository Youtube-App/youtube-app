import React from 'react';
import PropTypes from 'prop-types';

export const ChannelSubscribeNum = ({ subscribeNum }) => {
  return (
    <>
      <span>{subscribeNum}</span>
    </>
  );
};

ChannelSubscribeNum.propTypes = {
  subscribeNum: PropTypes.string.isRequired,
};

ChannelSubscribeNum.defaultProps = {
  subscribeNum: '612만명',
};
