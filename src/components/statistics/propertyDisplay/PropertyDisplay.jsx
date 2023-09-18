import css from './PropertyDisplay.module.css';
import PropTypes from 'prop-types';

export const PropertyDisplay = props => (
  <p className={css.propertyDisplay}>
    {props.type}: {props.number}
  </p>
);

PropertyDisplay.propTypes = {
  type: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
