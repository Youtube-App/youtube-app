import React from 'react';
import PropTypes from 'prop-types';

export const NameInput = ({ countNum, maxNum, placeholder }) => {
  return (
    <div className="name__input-wrapper">
      <div className="name__input-container">
        <input className="name__input" placeholder={placeholder} />
      </div>
      <div className="name__count-container">
        {countNum}/{maxNum}
      </div>
    </div>
  );
};

NameInput.propTypes = {
  countNum: PropTypes.number,
  maxNum: PropTypes.number,
  placeholder: PropTypes.string,
};

NameInput.defaultProps = {
  countNum: 0,
  maxNum: 150,
  placeholder: '재생목록의 제목을 입력하세요.',
};
