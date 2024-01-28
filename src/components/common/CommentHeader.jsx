import React from 'react';
import PropTypes from 'prop-types';
import { CommentRangeBtn } from 'components/buttons/CommentRangeBtn';

export const CommentHeader = ({ commentNum }) => {
  return (
    <div className="comment__header">
      <div className="comment__count">댓글 {commentNum}개</div>
      <CommentRangeBtn />
    </div>
  );
};

CommentHeader.propTypes = {
  commentNum: PropTypes.number,
};

CommentHeader.defaultProps = {
  commentNum: 0,
};
