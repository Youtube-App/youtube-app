import React from 'react';
import PropTypes from 'prop-types';

export const CommentInput = ({ placeholder, onChange }) => {
  function resizeTextarea() {
    let textarea = document.querySelector('.comment__input');

    if (textarea) {
      textarea.style.height = '23px';
      let height = textarea.scrollHeight;
      textarea.style.height = `${height}px`;
    }
  }
  return (
    <div className="comment__input-wrapper">
      <textarea
        className="comment__input"
        placeholder={placeholder}
        onInput={resizeTextarea}
        onChange={onChange}
      />
    </div>
  );
};

CommentInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

CommentInput.defaultProps = {
  placeholder: '댓글 추가...',
};
