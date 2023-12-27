import React from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { TfiClose } from 'react-icons/tfi';

export const HeaderInput = ({ state, placeholder }) => {
  return (
    <div className={`header__input-wrapper${state && `--${state}`}`}>
      <div className="header__input-container">
        <i className="header__search-icon">
          <GoSearch />
        </i>
        <input className="header__input" placeholder={placeholder} />
        <i className="header__close-icon">
          <TfiClose />
        </i>
      </div>
      <button className="header__submit-btn" type="button">
        <i className="header__input-btn-icon">
          <GoSearch />
        </i>
      </button>
    </div>
  );
};

HeaderInput.propTypes = {
  state: PropTypes.bool,
  placeholder: PropTypes.string,
};

HeaderInput.defaultProps = {
  state: false,
  placeholder: '입력하세요.',
};
