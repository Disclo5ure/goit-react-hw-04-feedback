import css from './ReviewButton.module.css';
import PropTypes from 'prop-types';

export const ReviewButton = props => (
  <button className={css.reviewButton} onClick={props.handleClick}>
    {props.children}
  </button>
);

ReviewButton.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.string,
};
