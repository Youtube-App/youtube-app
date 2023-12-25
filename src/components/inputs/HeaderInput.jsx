import React from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

export const HeaderInput = ({ state, placeholder }) => {
  // const type = type;
  return (
    <div className={`header__input-wrapper${state && `--${state}`}`}>
      <div className="header__input-container">
        <i className="header__input-icon">
          <GoSearch />
        </i>
        <input className="header__input" placeholder={placeholder} />
      </div>
      <button className="header__input-btn" type="button">
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
};
