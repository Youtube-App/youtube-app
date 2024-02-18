import React from 'react';
import PropTypes from 'prop-types';

export const NameInput = ({ placeholder }) => {
  return (
    <div className="name__input-wrapper">
      <input
        className=" name__input"
        placeholder={placeholder}
      />
      {/* <div className="name__count-container">
        countNum/maxNum
      </div> */}
    </div>
  );
};

NameInput.propTypes = {
  placeholder: PropTypes.string,
};

NameInput.defaultProps = {
  placeholder: '재생목록의 제목을 입력하세요.',
};
