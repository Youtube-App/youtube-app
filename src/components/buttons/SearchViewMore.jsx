import React from 'react';
import PropTypes from 'prop-types';

export const SearchViewMore = ({ count }) => {
  return (
    <button className="search__view-more">
      + <span className="view-num">{count}</span>개 더보기
    </button>
  );
};

SearchViewMore.propTypes = {
  count: PropTypes.number,
};

SearchViewMore.defaultProps = {
  count: 8,
};
