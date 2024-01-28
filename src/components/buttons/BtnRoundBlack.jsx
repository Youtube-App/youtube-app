import PropTypes from 'prop-types';
import cn from 'classnames';

export const BtnRoundBlack = ({ size, icon, label, disabled }) => {
  return (
    <button
      type="button"
      className={cn('btn--round btn--black', `btn--${size}`)}
      disabled={disabled}
    >
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundBlack.propTypes = {
  size: PropTypes.oneOf(['medium']),
  icon: PropTypes.element,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

BtnRoundBlack.defaultProps = {
  size: 'medium',
  icon: null,
  label: '채널 공유',
  disabled: false,
};
