import PropTypes from 'prop-types';

export const BtnRoundBlack = ({ icon, label, disabled }) => {
  return (
    <button
      type="button"
      className="btn__round btn__round-black"
      disabled={disabled}
    >
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundBlack.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

BtnRoundBlack.defaultProps = {
  icon: null,
  label: '채널 공유',
  disabled: false,
};
