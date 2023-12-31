import React from 'react';
import PropTypes from 'prop-types';
import { IoFlagOutline } from 'react-icons/io5';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { GoCircleSlash } from 'react-icons/go';
import { VscReport } from 'react-icons/vsc';

export const Dropdown = ({ size, list }) => {
  function renderItem(item) {
    if (item.type === 'menu') {
      return (
        <div className="dropdown__container">
          <i className="dropdown__menu-icon">{item.icon}</i>
          <div className="dropdown__label">{item.label}</div>
        </div>
      );
    }
    if (item.type === 'bar') {
      return <div className="dropdown-bar"></div>;
    }
    return null;
  }

  return (
    <div
      className={`dropdown__wrapper ${size && `dropdown__wrapper--${size}`}`}
    >
      {list.map((item) => (
        <React.Fragment key={item.label}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

Dropdown.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']).isRequired,
  list: PropTypes.array,
};

Dropdown.defaultProps = {
  size: 'medium',
  list: [
    {
      type: 'menu',
      icon: <IoFlagOutline />,
      label: '신고',
    },
    {
      type: 'menu',
      icon: <IoArrowUndoOutline />,
      label: '공유',
    },
    {
      type: 'bar',
    },
    {
      type: 'menu',
      icon: <GoCircleSlash />,
      label: '관심 없음',
    },
    {
      type: 'menu',
      icon: <VscReport />,
      label: '의견 보내기',
    },
  ],
};
