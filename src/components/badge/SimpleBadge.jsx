import React from 'react';
import PropTypes from 'prop-types';

export const SimpleBadge = ({ label }) => {
  return (
    <div className="badge__simple-wrap">
      <div className="badge__simple">
        <span>{label}</span>
      </div>
    </div>
  );
};

SimpleBadge.propTypes = {
  label: PropTypes.string.isRequired,
};

SimpleBadge.defaultProps = {
  label: '새 동영상',
};
