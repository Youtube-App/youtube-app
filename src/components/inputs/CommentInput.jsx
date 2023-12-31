import React from 'react';
import PropTypes from 'prop-types';

export const CommentInput = ({ placeholder }) => {
  return (
    <div className="comment__input-wrapper">
      <textarea className="comment__input" placeholder={placeholder} />
      {/* <div className="comment__btn-wrapper">
        <button className="comment__emoji-btn" type="button" />
        <div className="comment__btn-section">
          <button type="button">취소</button>
          <button type="button">댓글</button>
        </div>
      </div> */}
    </div>
  );
};

CommentInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

CommentInput.defaultProps = {
  placeholder: '댓글 추가...',
};
