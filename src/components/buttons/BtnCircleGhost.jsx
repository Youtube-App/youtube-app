import PropTypes from 'prop-types';
import cn from 'classnames';
import { PiCameraPlus } from 'react-icons/pi';

export const BtnCircleGhost = ({ disabled, icon, ariaLabel, size }) => {
  return (
    <button
      className={cn('btn--circle btn--ghost', `btn--${size}`)}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <i className="btn__icon">{icon}</i>
    </button>
  );
};

BtnCircleGhost.propTypes = {
  size: PropTypes.oneOf(['medium', 'small']),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  ariaLabel: PropTypes.string.isRequired,
};

BtnCircleGhost.defaultProps = {
  size: 'medium',
  disabled: false,
  icon: <PiCameraPlus />,
  ariaLabel: '만들기',
};
